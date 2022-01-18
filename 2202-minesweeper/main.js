const minesweeper = {
    /**
     * 游戏数据
     *
     * @desc 通过二维数组来表示每个方格的属性
     * @example
     * [
     *      [item, item, item],
     *      [item, item, item],
     *      [item, item, item],
     * ]
     *
     * item = {
     *      // 是否点击过
     *      isClick: boolean,
     *      // 是否递归过
     *      isRecursion: boolean,
     *      // 类型 0: 空白, 1-8: 数字, 9: 雷
     *      type: number,
     * }
     */
    map: [],
    /**
     * 游戏状态
     *
     * loaded: 加载完成, loading: 加载中, ongoing: 进行中
     */
    state: 'loading',
    /**
     * 初始化地图
     */
    row: 9,
    col: 9,
    mines: 10,
    mapCount: 0,
    mapTimer: null,
    // row 行, col 列
    initMap(row = 9, col = 9, mines = 10) {
        // 游戏地图尺寸
        this.map = [];
        this.row = row;
        this.col = col;
        this.mines = row * col === 256 ? 40 : row * col === 480 ? 99 : mines; // 16x16 ? 40 : 30x16 ? 99 : mines;

        // 修改游戏状态
        this.state = 'loading';
        // 地雷数量
        document.getElementById('mines').innerHTML = this.mines;
        // 游戏时间
        clearInterval(this.startTimer);
        document.getElementById('timer').innerHTML = '00:00';

        // 清除原有地图
        const oGame = document.getElementById('game');
        oGame.innerHTML = '';

        // 调整地图布局
        document.documentElement.style.setProperty('--base', row > 9 ? '2.4' : '2');

        document.documentElement.style.setProperty('--row', row);
        document.documentElement.style.setProperty('--col', col);

        // 加载动画
        clearInterval(this.mapTimer);
        this.mapCount = 0;
        this.mapTimer = setInterval(() => {
            // 所有行数已经遍历完成
            if (this.mapCount >= row) {
                // 状态变更
                this.state = 'loaded';
                // 生成地雷
                this.generateMines();
                // 清除定时器
                return clearInterval(this.mapTimer);
            }

            // 虚拟节点用来承载 dom 节点，方便一次性添加
            const oFragment = document.createDocumentFragment();

            const mapTemp = [];
            for (let i = 0; i < col; i++) {
                // 创建坐标节点
                const oDiv = document.createElement('div');

                // 加载动画样式
                oDiv.className = 'state-loading';
                oDiv.addEventListener('animationend', function fn() {
                    oDiv.className = 'state-closed';
                    oDiv.removeEventListener('animationend', fn);
                });

                // 坐标
                oDiv.pos = [this.mapCount, i];
                // 方格
                mapTemp.push({
                    // 是否点击过
                    isClick: false,
                    // 是否递归过
                    isRecursion: false,
                    // 类型 0: 空白, 1-8: 数字, 9: 雷
                    type: 0,
                });

                // 将坐标节点放入虚拟节点
                oFragment.appendChild(oDiv);
            }
            this.map.push(mapTemp);

            // 将虚拟节点放入游戏区
            oGame.appendChild(oFragment);

            // 增加遍历行数
            this.mapCount++;
        }, 100);
    },
    /**
     * 查找周围坐标，并去除边界值
     *
     * @example
     * 假设坐标为 [x, y]，那么周围坐标：
     * [
     *      [x - 1, y - 1], [x - 1, y], [x - 1, y + 1],
     *      [x,     y - 1], ...,        [x,     y + 1],
     *      [x + 1, y - 1], [x + 1, y], [x + 1, y + 1],
     * ]
     */
    findPos([x, y]) {
        // 周围坐标
        const pos = [
            [x - 1, y - 1], [x - 1, y], [x - 1, y + 1],
            [x,     y - 1],             [x,     y + 1],
            [x + 1, y - 1], [x + 1, y], [x + 1, y + 1],
        ];
        // 简单的碰撞检测去除边界值
        return pos.filter(([x, y]) => !(x < 0 || y < 0 || x >= this.row || y >= this.col));
    },
    /**
     * 生成地雷
     */
    generateMines() {
        // 先生成 N 个不重复的数字
        let pos = [];
        while (pos.length !== this.mines) {
            pos = [...new Set([...pos, Math.floor(Math.random() * this.row * this.col)])];
        }

        // 将数字转为坐标数组
        for (let i = 0; i < pos.length; i++) {
            const x = Math.floor(pos[i] / this.col);
            const y = pos[i] - x * this.col;

            pos[i] = [x, y];
            // 将对应数据 type 改为 9（雷）
            this.map[x][y].type = 9;
        }

        // 计算雷周围坐标数字
        for (let i = 0; i < pos.length; i++) {
            // 查找周围坐标
            const around = this.findPos(pos[i]);
            for (let j = 0; j < around.length; j++) {
                const grid = this.map[around[j][0]][around[j][1]];
                // 不是雷则数字加 1
                if (grid.type !== 9) {
                    grid.type++;
                }
            }
        }
    },
    /**
     * 处理点击事件
     */
    handleClick(dom) {
        // 判断状态
        if (this.state === 'loading') return;
        // 修改状态
        if (this.state !== 'ongoing') {
            this.state = 'ongoing';
            this.startTime = +new Date();
            this.startInterval();
        }

        const grid = this.map[dom.pos[0]][dom.pos[1]];

        // 修改点击状态
        grid.isClick = true;
        // 修改递归状态
        grid.isRecursion = true;
        // 修改方格样式
        dom.className = 'state-' + grid.type;

        // 处理空白区域
        if (grid.type === 0) {
            this.handleSpace(dom.pos);
        }
    },
    /**
     * 处理空白区域
     */
    handleSpace(pos) {
        const oGame = document.getElementById('game');

        // 查找周围坐标
        const around = this.findPos(pos);
        for (let i = 0; i < around.length; i++) {
            // 坐标
            const [x, y] = around[i];
            // 对应方格
            const grid = this.map[x][y];

            // 判断是否递归过
            if (false === grid.isRecursion) {
                // 修改点击状态
                grid.isClick = true;
                // 修改递归状态
                grid.isRecursion = true;

                // 加载动画样式
                const oDiv = oGame.children[x * this.col + y];
                oDiv.className = 'state-down';
                oDiv.addEventListener('animationend', function fn() {
                    oDiv.className = 'state-' + grid.type;
                    oDiv.removeEventListener('animationend', fn);
                });

                // 如果为数字则跳过
                if (grid.type > 0 && grid.type < 9) {
                    continue;
                }
                // 如果为空白则递归
                if (grid.type === 0) {
                    this.handleSpace(around[i]);
                }
            }
        }
    },
    /**
     * 游戏计时
     */
    startTime: 0,
    startTimer: null,
    startInterval() {
        const timer = document.getElementById('timer');

        this.startTimer = setInterval(() => {
            const disTime = Math.floor((+new Date() - this.startTime) / 1000);
            const minutes = Math.floor(disTime / 60) < 10 ? '0' + Math.floor(disTime / 60) : Math.floor(disTime / 60);
            const seconds = disTime % 60 < 10 ? '0' + disTime % 60 : disTime % 60;

            timer.innerHTML = minutes + ':' + seconds;
        }, 1000);
    },
};
// 默认开始 9x9 游戏
minesweeper.initMap();

/**
 * 事件绑定
 */
document.getElementById('simple').addEventListener('click', () => {
    if ('ongoing' === minesweeper.state && false === confirm('正在游戏，是否重新开始？')) return;
    minesweeper.initMap();
});
document.getElementById('medium').addEventListener('click', () => {
    if ('ongoing' === minesweeper.state && false === confirm('正在游戏，是否重新开始？')) return;
    minesweeper.initMap(16, 16);
});
document.getElementById('hard').addEventListener('click', () => {
    if ('ongoing' === minesweeper.state && false === confirm('正在游戏，是否重新开始？')) return;
    minesweeper.initMap(16, 30);
});
document.oncontextmenu = () => false;

const oGame = document.getElementById('game');
let oTemp = null;

// 鼠标从方块按下
oGame.addEventListener('mousedown', (ev) => {
    if (oGame === ev.target) return;

    // 缓存按下元素
    oTemp = ev.target;

    const [x, y] = ev.target.pos;
    if (false === minesweeper.map[x][y].isClick) {
        // 给缓存的元素添加按下样式
        oTemp.className = 'state-down';
    }
});
// 鼠标移动
oGame.addEventListener('mousemove', (ev) => {
    // 缓存的 oTemp 和当前元素不一致
    if (oTemp && oTemp !== ev.target) {
        // 如果缓存的元素为按下样式
        if (oTemp.className === 'state-down') {
            // 给缓存的元素添加抬起样式
            oTemp.className = 'state-up';
        }
        // 删除缓存元素
        oTemp = null;
    }
})
// 鼠标抬起
oGame.addEventListener('mouseup', (ev) => {
    // 缓存的 oTemp 和当前元素不一致
    if (oTemp !== ev.target) {
        // 删除缓存元素
        oTemp = null;
        return;
    }

    // 处理点击事件
    minesweeper.handleClick(oTemp);
    // 删除缓存元素
    oTemp = null;
});
