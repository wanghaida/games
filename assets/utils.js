// 百度统计
var _hmt = _hmt || [];
var hm1 = document.createElement('script');
hm1.src = 'https://hm.baidu.com/hm.js?a4ac259cf401d198308d1de64bec6d72';

// 友盟统计
var um1 = document.createElement('span');
um1.id = 'cnzz_stat_icon_1280809686';
um1.style.display = 'none';

var um2 = document.createElement('script');
um2.src = 'https://s4.cnzz.com/z_stat.php?id=1280809686';

window.addEventListener('load', () => {
    document.body.appendChild(hm1);
    document.body.appendChild(um1);
    document.body.appendChild(um2);
});
