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
             *
             * 地图坐标点属性用对象表示的话，这里的 if 判定完全可以删除
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
    // 蛇身
    body: [[2, 4], [2, 3], [2, 2]],
    // 被移除的蛇尾（用来清除样式）
    last: [2, 1],
    // 方向（top right bottom left）
    direction: 'right',
    // 食物
    food: [2, 8],
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
                oDivs[node[0] * 30 + node[1]].className = `snake_head snake_head_${this.direction}`;
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
    // 绘制食物
    drawFood() {
        // 所有坐标点
        const oDivs = document.querySelectorAll('#game div');

        // 清除旧位置食物
        oDivs[this.food[0] * 30 + this.food[1]].className = '';

        // 生成新位置食物
        while (
            // 地图中的障碍物
            map[this.food[0]][this.food[1]] !== 0 ||
            // 蛇自身
            this.body.find((item) => item[0] === this.food[0] && item[1] === this.food[1])
        ) {
            // 生成 (1-28, 1-28) 的坐标，因为 0 和 29 是墙
            this.food = [Math.floor(Math.random() * 28 + 1), Math.floor(Math.random() * 28 + 1)]
        }

        oDivs[this.food[0] * 30 + this.food[1]].className = 'food';
    },
    // 初始化
    init() {
        clearTimeout(this.timer);

        document.getElementById('game').innerHTML = '';
        drawMap();

        this.body = [[2, 4], [2, 3], [2, 2]];
        this.last = [2, 1];
        this.direction = 'right';
        this.drawFood();
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
                // 地图中的障碍物
                map[head[0]][head[1]] !== 0 ||
                // 蛇自身
                this.body.find((item) => item[0] === head[0] && item[1] === head[1])
            ) {
                alert('Game Over!');
                return this.init();
            }

            // 将蛇头添加
            this.body.unshift(head);

            // 如果吃到食物，就重绘食物、不移除蛇尾
            if (head[0] === this.food[0] && head[1] === this.food[1]) {
                this.drawFood();
                document.getElementById('score').innerHTML = `分数：${this.body.length - 3}`;
            } else {
                // 将蛇尾移除
                this.last = this.body.pop();
            }

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
