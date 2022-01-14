/**
 * 绘制地图
 */
let count = 0;
let timer = null;

const drawMap = (row = 9, column = 9) => {
    // 清除原有地图
    const oGame = document.getElementById('game');
    oGame.innerHTML = '';

    // 调整地图布局
    document.documentElement.style.setProperty('--base', row > 9 ? '2.4' : '2');

    document.documentElement.style.setProperty('--row', row);
    document.documentElement.style.setProperty('--column', column);

    // 加载动画
    clearInterval(timer);
    count = 0;
    timer = setInterval(() => {
        // 所有行数已经遍历完成
        if (count >= row) return clearInterval(timer);

        // 虚拟节点用来承载 dom 节点，方便一次性添加
        const oFragment = document.createDocumentFragment();

        for (let i = 0; i < column; i++) {
            // 创建坐标节点
            const oDiv = document.createElement('div');

            // 加载动画样式
            oDiv.className = 'state-closed';

            // 将坐标节点放入虚拟节点
            oFragment.appendChild(oDiv);
        }

        // 将虚拟节点放入游戏区
        oGame.appendChild(oFragment);

        // 增加遍历行数
        count++;
    }, 100);
};
drawMap();

/**
 * 事件绑定
 */
document.getElementById('simple').addEventListener('click', () => {
    drawMap();
});
document.getElementById('medium').addEventListener('click', () => {
    drawMap(16, 16);
});
document.getElementById('hard').addEventListener('click', () => {
    drawMap(16, 30);
});

const oGame = document.getElementById('game');
// 鼠标从方块按下
oGame.addEventListener('mousedown', (ev) => {
    if (oGame === ev.target) return;

    console.log('mousedown balabala...');
    ev.target.className = 'state-closed-down';
});
// 鼠标从方块抬起
oGame.addEventListener('mouseup', (ev) => {
    if (oGame === ev.target) return;

    console.log('mouseup balabala...');
    ev.target.className = Math.random() < 0.5 ? 'state-closed-up' : 'state-0';
});
// 鼠标从方块单击
oGame.addEventListener('click', (ev) => {
    if (oGame === ev.target) return;

    console.log('click balabala...');
});
// 鼠标从方块双击
oGame.addEventListener('dblclick', (ev) => {
    if (oGame === ev.target) return;

    console.log('dblclick balabala...');
});
