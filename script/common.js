
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
        <div class="details-new-rowno">\
            <input type="text" id="rowno${clicktime}" name="rowno${clicktime}" placeholder="序号">\
        </div>\
        <div class="details-new-reason">\
            <input type="text" id="reason${clicktime}" name="reason${clicktime}" placeholder="加班原因">\
        </div>\
        <div class="details-new-location">\
            <input type="text" id="location${clicktime}" name="location${clicktime}" placeholder="加班地点">\
        </div>\
        <div class="details-new-overtime-date">\
            <input type="text" id="overtime-date${clicktime}" name="overtime-date${clicktime}" placeholder="加班日期">\
        </div>\
        <div class="details-new-overtime-start">\
            <input type="text" id="overtime-start${clicktime}" name="overtime-start${clicktime}" placeholder="加班开始时间">\
        </div>\
        <div class="details-new-overtime-end">\
            <input type="text" id="overtime-end${clicktime}" name="overtime-end${clicktime}" placeholder="加班结束时间">\
        </div>\
        <div class="details-new-overtime-break">\
            <input type="text" id="overtime-break${clicktime}" name="overtime-break${clicktime}" placeholder="加班休息小时">\
        </div>\
        <div class="details-new-overtime-time">\
           <input type="text" id="overtime-time${clicktime}" name="overtime-time${clicktime}" placeholder="加班时长">\
        </div>\
        <div class="details-new-settle-up">\
            <input type="text" id="settle-up${clicktime}" name="settle-up${clicktime}" placeholder="结算方式">\
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