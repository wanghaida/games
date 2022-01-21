// 游戏区域
const oGame = document.getElementById('game');
// 方块缓存
let oTemp = null;

const minesweeper = {
    /**
     * 游戏数据
     *
     * @desc 通过二维数组来表示每个方块的属性
     * @example
     * [
     *      [item, item, item],
     *      [item, item, item],
     *      [item, item, item],
     * ]
     *
     * item = {
     *      // 是否打开过
     *      isOpen: boolean,
     *      // 是否递归过
     *      isCheck: boolean,
     *      // 是否爆炸过（同 isCheck，用于游戏结束后的递归判定）
     *      isExplode: boolean,
     *      // 标记 flag normal question
     *      sign: string,
     *      // 类型 0: 空白, 1-8: 数字, 9: 地雷
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
        oGame.className = '';
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
                // 方块
                mapTemp.push({
                    // 是否打开过
                    isOpen: false,
                    // 是否递归过
                    isCheck: false,
                    // 是否爆炸过
                    isExplode: false,
                    // 标记 flag normal question
                    sign: 'normal',
                    // 类型 0: 空白, 1-8: 数字, 9: 地雷
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
    findPosUDLR([x, y]) {
        // 周围坐标
        const pos = [
            [x - 1, y], // 上
            [x + 1, y], // 下
            [x, y - 1], // 左
            [x, y + 1], // 右
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
            // 将对应数据 type 改为 9（地雷）
            this.map[x][y].type = 9;
        }

        // 计算地雷周围坐标数字
        for (let i = 0; i < pos.length; i++) {
            // 查找周围坐标
            const around = this.findPos(pos[i]);
            for (let j = 0; j < around.length; j++) {
                const grid = this.map[around[j][0]][around[j][1]];
                // 不是地雷则数字加 1
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
        // 修改状态
        if (this.state !== 'ongoing') {
            this.state = 'ongoing';
            this.startTime = +new Date();
            this.startInterval();
        }

        const grid = this.map[dom.pos[0]][dom.pos[1]];

        // 修改打开状态
        grid.isOpen = true;
        // 修改递归状态
        grid.isCheck = true;
        // 修改方块样式
        dom.className = 'state-' + grid.type;

        // 处理地雷方块
        if (grid.type === 9) {
            this.handleMines([dom.pos]);
        }
        // 处理空白方块
        else if (grid.type === 0) {
            this.handleSpace(dom.pos);
        }
        // // 处理数字方块（这里改为双击触发）
        // else if (grid.type > 0 && grid.type < 9) {
        //     this.handleNumber(dom.pos, grid.type);
        // }

        // 判断游戏成功（未打开的方块 === 旗子的数量 + 地雷的数量）
        let count = 0;
        let flags = 0;
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                // 未打开的方块
                if (this.map[i][j].isOpen === false) {
                    count++;
                }
                // 旗子的数量
                if (this.map[i][j].sign === 'flag') {
                    flags++;
                }
            }
        }

        if (count === flags + this.mines) {
            this.state = 'over';
            oGame.className = 'success';
        }
    },
    /**
     * 处理地雷爆炸
     */
    explodeMines(pos) {
        setTimeout(() => {
            // 查找周围坐标
            const around = this.findPosUDLR(pos);
            for (let i = 0; i < around.length; i++) {
                // 坐标
                const [x, y] = around[i];
                // 对应方块
                const grid = this.map[x][y];

                // 未爆炸过
                if (grid.isExplode === false && grid.sign !== 'flag') {
                    // 修改爆炸状态
                    grid.isExplode = true;

                    const oDiv = oGame.children[x * this.col + y];

                    // 如果是地雷
                    if (grid.type === 9) {
                        // 修改打开状态
                        grid.isOpen = true;
                        // 加载动画样式
                        oDiv.className = 'state-over';
                    }
                    // 如果未打开
                    else if (!grid.isOpen) {
                        // 加载动画样式
                        oDiv.className = 'state-explode';
                        oDiv.addEventListener('animationend', function fn() {
                            oDiv.className = 'state-closed';
                            oDiv.removeEventListener('animationend', fn);
                        });
                    }

                    // 爆炸递归
                    this.explodeMines(around[i]);
                }
            }
        }, 100);
    },
    /**
     * 处理地雷方块
     */
    handleMines(pos) {
        // 修改状态
        this.state = 'over';
        oGame.className = 'fail';
        // 清除时间
        clearInterval(this.startTimer);

        // 标记所有地雷和错误旗子
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                // 是地雷 且 不是旗子
                if (this.map[i][j].type === 9 && this.map[i][j].sign !== 'flag') {
                    oGame.children[i * this.col + j].classList = 'state-9';
                }
                // 不是地雷 且 是旗子
                if (this.map[i][j].type !== 9 && this.map[i][j].sign === 'flag') {
                    oGame.children[i * this.col + j].classList = 'state-flag-error';
                }
            }
        }

        for (let i = 0; i < pos.length; i++) {
            // 坐标
            const [x, y] = pos[i];
            // 当前方块
            const grid = this.map[x][y];

            // 修改打开状态
            grid.isOpen = true;
            // 修改爆炸状态
            grid.isExplode = true;

            // 加载动画样式
            const oDiv = oGame.children[x * this.col + y];
            oDiv.className = 'state-over';
            oDiv.addEventListener('animationend', function fn() {
                // 游戏结束动画
                minesweeper.explodeMines(pos[i]);
                oDiv.removeEventListener('animationend', fn);
            });
        }
    },
    /**
     * 处理空白方块
     */
    handleSpace(pos) {
        // 查找周围坐标
        const around = this.findPos(pos);
        for (let i = 0; i < around.length; i++) {
            // 坐标
            const [x, y] = around[i];
            // 对应方块
            const grid = this.map[x][y];

            // 未递归过 且 标记为 normal
            if (false === grid.isCheck && 'normal' === grid.sign) {
                // 修改打开状态
                grid.isOpen = true;
                // 修改递归状态
                grid.isCheck = true;

                // 加载动画样式
                const oDiv = oGame.children[x * this.col + y];
                oDiv.className = 'state-' + grid.sign + '-down';
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
     * 处理数字方块
     */
    handleNumber(pos, type) {
        // 查找周围坐标
        const around = this.findPos(pos);

        // 标记的数量，当旗子（flag） >= 数字（type）时，才能将剩余 normal 标记做点击处理
        let flag = 0;
        // 旗子方块
        const flags = [];
        // 地雷方块
        const mines = [];

        for (let i = 0; i < around.length; i++) {
            // 坐标
            const [x, y] = around[i];
            // 对应方块
            const grid = this.map[x][y];

            // 旗子
            if (grid.sign === 'flag') {
                flag++;
                flags.push({ ...grid, pos: around[i] });
            }
            // 地雷
            if (grid.type === 9) {
                mines.push({ ...grid, pos: around[i] });
            }
        }

        if (flag >= type) {
            // 判断标记是否正确，因为都是一个顺序 push，所以可以简单的转字符串后比对
            if (JSON.stringify(flags) === JSON.stringify(mines)) {
                this.handleSpace(pos);
            }
            // 标记错误
            else {
                // 处理错误旗子
                for (let i = 0; i < flags.length; i++) {
                    if (flags[i].type === 9) continue;

                    oGame.children[flags[i].pos[0] * this.col + flags[i].pos[1]].className = 'state-flag-error';
                }
                // 处理错误地雷
                this.handleMines(mines.filter((item) => item.sign !== 'flag').map((item) => item.pos));
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

// 鼠标从方块按下
oGame.addEventListener('mousedown', (ev) => {
    // 没点中方块 或 游戏加载中/游戏已结束
    if (oGame === ev.target || ['loading', 'over'].includes(minesweeper.state)) return;

    const [x, y] = ev.target.pos;
    if (false === minesweeper.map[x][y].isOpen) {
        // 缓存按下元素
        oTemp = ev.target;
        // 给缓存的元素添加按下样式
        oTemp.className = 'state-' + minesweeper.map[x][y].sign + '-down';
    }
});
// 鼠标移动
oGame.addEventListener('mousemove', (ev) => {
    // 缓存的 oTemp 和当前元素不一致
    if (oTemp && oTemp !== ev.target) {
        // 如果缓存的元素为按下样式
        if (oTemp.className.match(/state\-.+\-down/)) {
            // 给缓存的元素添加抬起样式
            oTemp.className = oTemp.className.replace('-down', '-up');
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

    const [x, y] = ev.target.pos;

    // 单击
    if (ev.button === 0) {
        // 没有标记
        if (minesweeper.map[x][y].sign === 'normal') {
            // 处理点击事件
            minesweeper.handleClick(oTemp);
        } else {
            // 给缓存的元素添加抬起样式
            oTemp.className = 'state-' + minesweeper.map[x][y].sign + '-up';
        }
    }
    // 右击 且 未打开过
    if (ev.button === 2) {
        // 修改标记状态
        minesweeper.map[x][y].sign = {
            flag: 'question',
            normal: 'flag',
            question: 'normal',
        }[minesweeper.map[x][y].sign];

        // 地雷数量
        if (minesweeper.map[x][y].sign === 'flag') {
            minesweeper.mines -= 1;
        }
        if (minesweeper.map[x][y].sign === 'question') {
            minesweeper.mines += 1;
        }
        document.getElementById('mines').innerHTML = minesweeper.mines;

        // 给缓存的元素添加抬起样式
        oTemp.className = 'state-' + minesweeper.map[x][y].sign + '-up';
    }

    // 删除缓存元素
    oTemp = null;
});
// 双击
oGame.addEventListener('dblclick', (ev) => {
    // 没点中方块
    if (oGame === ev.target) return;

    const [x, y] = ev.target.pos;
    const grid = minesweeper.map[x][y];
    // 打开 且 为数字
    if (grid.isOpen && grid.type > 0 && grid.type < 9) {
        minesweeper.handleNumber([x, y], grid.type);
    }
});
