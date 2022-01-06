/**
 * 地图
 * @desc 类型：0: 空地, 1: 草墙, 2-4: 石头
 */
const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

/**
 * 绘制地图
 */
const drawMap = () => {
    // 虚拟节点用来承载 dom 节点，方便一次性添加
    const oFragment = document.createDocumentFragment();

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            // 创建坐标节点
            const oDiv = document.createElement('div');

            /**
             * 根据坐标节点地图类型来显示对应的图案
             *
             * 最少一个方向、最多有两个方向的草墙和当前草墙相连，查找当前草墙的上右下左哪个方向是草墙，进行对应的图案显示
             */
            let classname = '';

            // 当前坐标节点地图类型 === 草墙
            if (map[i][j] === 1) {
                classname = 'grass_top'; // 默认下方是草墙

                // 上（判定上方是不是草墙）
                if (map[i - 1]?.[j] === 1) {
                    classname = 'grass_bottom'; // 如果上方是草墙，默认采用 grass_bottom 图案
                    // 右（判定右方是不是草墙）
                    if (map[i][j + 1] === 1) {
                        classname = 'grass_bottom_left'; // 如果上方、右方是草墙
                    }
                    // 下（判定下方是不是草墙）
                    if (map[i + 1]?.[j] === 1) {
                        classname = 'grass_vertical'; // 如果上方、下方是草墙
                    }
                    // 左（判定左方是不是草墙）
                    if (map[i][j - 1] === 1) {
                        classname = 'grass_bottom_right'; // 如果上方、左方是草墙
                    }
                }
                // 右
                if (map[i][j + 1] === 1) {
                    classname = 'grass_left';
                    // 上
                    if (map[i - 1]?.[j] === 1) {
                        classname = 'grass_bottom_left';
                    }
                    // 下
                    if (map[i + 1]?.[j] === 1) {
                        classname = 'grass_top_left';
                    }
                    // 左
                    if (map[i][j - 1] === 1) {
                        classname = 'grass_horizontal';
                    }
                }
                // 左
                if (map[i][j - 1] === 1) {
                    classname = 'grass_right';
                    // 上
                    if (map[i - 1]?.[j] === 1) {
                        classname = 'grass_bottom_right';
                    }
                    // 右
                    if (map[i][j + 1] === 1) {
                        classname = 'grass_horizontal';
                    }
                    // 下
                    if (map[i + 1]?.[j] === 1) {
                        classname = 'grass_top_right';
                    }
                }
            }
            // 当前坐标节点地图类型 === 石头
            if ([2, 3, 4].includes(map[i][j])) {
                classname = `stone_0${map[i][j]}`;
            }

            oDiv.className = classname;

            // 将坐标节点放入虚拟节点
            oFragment.appendChild(oDiv);
        }
    }

    // 将虚拟节点放入游戏区
    document.getElementById('game').appendChild(oFragment);
};

const snake = {
    // 蛇
    // body: [[2, 4], [2, 3], [2, 2]],
    body: [[6, 8], [6, 7], [6, 6], [6, 5], [5, 5], [4, 5], [3, 5], [2, 5]],
    // 墙（需要和地图当中的草墙、石头对应上，四周的草墙单独计算）
    wall: [[5, 19], [5, 20], [5, 21], [6, 5], [6, 21], [7, 21], [7, 22], [14, 24], [16, 10], [17, 7], [17, 8], [17, 9], [17, 10], [22, 9]],
    // 方向（top right bottom left）
    direction: 'right',
    // 被移除的蛇尾（用来清除样式）
    last: [2, 1],
    // 定时器
    timer: null,
    // 绘制蛇
    drawSnake() {
        // 所有坐标点
        const oDivs = document.querySelectorAll('#game div');

        // 被移除的蛇尾
        oDivs[this.last[0] * 30 + this.last[1]].className = '';

        for (let i = 0; i < this.body.length; i++) {
            const node = this.body[i];
            const prev = this.body[i - 1] ?? [];
            const next = this.body[i + 1] ?? [];
            const isBody = i !== this.body.length - 1;

            // 蛇头
            if (i === 0) {
                oDivs[node[0] * 30 + node[1]].className = `snake_head_${this.direction}`;
                continue;
            }

            /**
             * 判断蛇节点的四周哪里有其他节点来确定图形
             */
            let classname = '';

            // 上（判定上方是不是蛇节点）
            if (node[0] - 1 === prev[0] || node[0] - 1 === next[0]) {
                if (isBody) {
                    classname = 'snake_body_vertical'; // 如果上方是蛇节点，默认采用 snake_body_vertical 图案
                    // 右（判定右方是不是蛇节点）
                    if (node[1] + 1 === prev[1] || node[1] + 1 === next[1]) {
                        classname = 'snake_body_bottom_left'; // 如果上方、右方是蛇节点
                    }
                    // 左（判定左方是不是蛇节点）
                    if (node[1] - 1 === prev[1] || node[1] - 1 === next[1]) {
                        classname = 'snake_body_bottom_right'; // 如果上方、左方是蛇节点
                    }
                } else {
                    classname = `snake_tail_bottom_${(node[0] + node[1]) % 2}`; // 蛇尾，通过坐标的 (x + y) % 2 来达到摇晃尾巴的目的
                }
            }
            // 右
            if (node[1] + 1 === prev[1] || node[1] + 1 === next[1]) {
                if (isBody) {
                    classname = 'snake_body_horizontal';
                    // 上
                    if (node[0] - 1 === prev[0] || node[0] - 1 === next[0]) {
                        classname = 'snake_body_bottom_left';
                    }
                    // 下
                    if (node[0] + 1 === prev[0] || node[0] + 1 === next[0]) {
                        classname = 'snake_body_top_left';
                    }
                } else {
                    classname = `snake_tail_left_${(node[0] + node[1]) % 2}`; // 蛇尾
                }
            }
            // 下
            if (node[0] + 1 === prev[0] || node[0] + 1 === next[0]) {
                if (isBody) {
                    classname = 'snake_body_vertical';
                    // 右
                    if (node[1] + 1 === prev[1] || node[1] + 1 === next[1]) {
                        classname = 'snake_body_top_left';
                    }
                    // 左
                    if (node[1] - 1 === prev[1] || node[1] - 1 === next[1]) {
                        classname = 'snake_body_top_right';
                    }
                } else {
                    classname = `snake_tail_top_${(node[0] + node[1]) % 2}`; // 蛇尾
                }
            }
            // 左
            if (node[1] - 1 === prev[1] || node[1] - 1 === next[1]) {
                if (isBody) {
                    classname = 'snake_body_horizontal';
                    // 上
                    if (node[0] - 1 === prev[0] || node[0] - 1 === next[0]) {
                        classname = 'snake_body_bottom_right';
                    }
                    // 下
                    if (node[0] + 1 === prev[0] || node[0] + 1 === next[0]) {
                        classname = 'snake_body_top_right';
                    }
                } else {
                    classname = `snake_tail_right_${(node[0] + node[1]) % 2}`; // 蛇尾
                }
            }

            oDivs[node[0] * 30 + node[1]].className = classname;
        }
    },
    // 初始化
    init() {
        clearTimeout(this.timer);

        document.getElementById('game').innerHTML = '';
        drawMap();

        this.body = [[2, 4], [2, 3], [2, 2]];
        this.last = [2, 1];
        this.direction = 'right';
        this.drawSnake();
    },
    // 开始游戏
    start() {
        this.pause();
        this.timer = setTimeout(() => {
            // 蛇头
            const head = [];

            switch (this.direction) {
                case 'top': // 向上移动
                    head.push(this.body[0][0] - 1, this.body[0][1]);
                    break;
                case 'right': // 向右移动
                    head.push(this.body[0][0], this.body[0][1] + 1);
                    break;
                case 'bottom': // 向下移动
                    head.push(this.body[0][0] + 1, this.body[0][1]);
                    break;
                case 'left': // 向左移动
                    head.push(this.body[0][0], this.body[0][1] - 1);
                    break;
            }

            // 判断是否撞墙
            if (
                // 四周的墙
                head[0] === 0 || head[0] === 29 || head[1] === 0 || head[1] === 29 ||
                // 中间的墙
                this.wall.find((item) => item[0] === head[0] && item[1] === head[1]) ||
                // 蛇自身
                this.body.find((item) => item[0] === head[0] && item[1] === head[1])
            ) {
                alert('Game Over!');
                return this.init();
            }

            // 将蛇头添加
            this.body.unshift(head);
            // 将蛇尾移除
            this.last = this.body.pop();

            // 重绘蛇
            snake.drawSnake();

            this.start();
        }, 150);
    },
    // 暂停游戏
    pause() {
        clearTimeout(this.timer);
    },
};
snake.init();

document.getElementById('start').addEventListener('click', () => {
    snake.start();
});

document.getElementById('pause').addEventListener('click', () => {
    snake.pause();
});

document.addEventListener('keydown', (ev) => {
    // 上
    if (ev.key === 'ArrowUp' && snake.direction !== 'bottom') {
        snake.direction = 'top';
    }
    // 右
    else if (ev.key === 'ArrowRight' && snake.direction !== 'left') {
        snake.direction = 'right';
    }
    // 下
    else if (ev.key === 'ArrowDown' && snake.direction !== 'top') {
        snake.direction = 'bottom';
    }
    // 左
    else if (ev.key === 'ArrowLeft' && snake.direction !== 'right') {
        snake.direction = 'left';
    }
});

document.getElementById('t').addEventListener('click', () => {
    snake.direction = 'top';
    snake.start();
    snake.drawSnake();
});
document.getElementById('r').addEventListener('click', () => {
    snake.direction = 'right';
    snake.start();
    snake.drawSnake();
});
document.getElementById('b').addEventListener('click', () => {
    snake.direction = 'bottom';
    snake.start();
    snake.drawSnake();
});
document.getElementById('l').addEventListener('click', () => {
    snake.direction = 'left';
    snake.start();
    snake.drawSnake();
});
