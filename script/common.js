
// 禁用雙指放大
document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, {
    passive: false
});

// 禁用雙擊放大
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
    var now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);



// 设定今天日期
function setDate() {
    var d = new Date().toLocaleDateString();
    document.getElementById("applydate").value = d;
};

function submit() {
    var cc = window.confirm("是否产生送出资料?");
    if (cc == true) {
        alert("已将产生资料复制至剪贴簿");
    } else {
        return;
    }

}