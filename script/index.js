// 禁用雙指放大
document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);

// 禁用雙擊放大
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
    var now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// 依tg主題變色
function setThemeClass() {
    document.documentElement.className = Telegram.WebApp.colorScheme;
}
Telegram.WebApp.onEvent('themeChanged', setThemeClass);
setThemeClass();


// 按鈕連結區
function buttons_click_1() {
    window.open("https://www.w3schools.com/jsref/event_onclick.asp")
};

function buttons_click_2() {
    window.open("overtime.html", '_self', 'width=200,height=100')
};