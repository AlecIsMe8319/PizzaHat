
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

// 新增明細表
var clicktime = 0;
function plusbutton() {
    clicktime = clicktime + 1;
    // console.log(clicktime);
    var detail = document.querySelector(".detail");
    var newdiv = document.createElement("cm");
    newdiv.setAttribute("id", clicktime);
    newdiv.innerHTML = `<div class="details-new ${clicktime}">\
    <div class="detail-left">\
        <div class="details-new-rowno-${clicktime}">\
            序号\
        </div>\
        <div class="details-new-reason-${clicktime}">\
            加班原因\
        </div>\
        <div class="details-new-location-${clicktime}">\
            加班地点\
        </div>\
        <div class="details-new-overtime-date-${clicktime}">\
            加班日期\
        </div>\
        <div class="details-new-overtime-start-${clicktime}">\
            加班开始时间\
        </div>\
        <div class="details-new-overtime-end-${clicktime}">\
            加班结束时间\
        </div>\
        <div class="details-new-overtime-break-${clicktime}">\
            加班休息小时\
        </div>\
        <div class="details-new-overtime-time-${clicktime}">\
            加班时长\
        </div>\
        <div class="details-new-settle-up-${clicktime}">\
            结算方式\
        </div>\
    </div>\
    <div class="details-right">\
        <div class="details-new-delete">\
            <button class="close-tab-button" onclick="minusbutton(${clicktime})">-</button>\
        </div>\
    </div>\
</div>`;
    detail.appendChild(newdiv);
}


// 删除明细表
function minusbutton(classid) {
    document.getElementById(classid).remove();
}