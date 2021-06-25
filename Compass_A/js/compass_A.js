
let moveItem = document.getElementsByTagName('a');
let ll = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
let tt = document.getElementsByClassName('trigram');
let addButtons = document.getElementsByClassName('add');
let removeButtons = document.getElementsByClassName('remove')
//添加新网址 parent Element id
let abid;
//flag 用于元素显示隐藏
let flag = 0;
for (t of tt) {
    t.onclick = function (ev) {
        if (flag == 0) {
            oz_show();
            flag = 1;
        } else {
            oz_hidden();
            flag = 0;
        }
    }
}

//元素显示；事件绑定
function oz_show() {
    for (ab of addButtons) {
        ab.style.display = "unset";
        ab.onclick = function (e) {
            abid = e.target.parentElement.parentElement.id;
            document.getElementById("addBox").style.display = "unset";
            document.removeEventListener('keydown', fSearch);
            document.addEventListener('keydown', oz_add);
        }
    }
    for (rb of removeButtons) {
        rb.style.display = "unset";
        rb.onclick = function (e) {
            let elem = e.target.parentElement.previousElementSibling;
            let tid = e.target.parentElement.parentElement.parentElement.id;
            app[tid].splice(elem.id - app[tid][0].id, 1);
        }
    }
}

function oz_hidden() {
    for (i of addButtons) {
        i.style.display = "none";
    }
    for (i of removeButtons) {
        i.style.display = "none";
    }
}

document.getElementById("cancel").onclick = function () {
    document.getElementById('addBox').style.display = "none";
    document.removeEventListener('keydown', oz_add);
    document.addEventListener('keydown', fSearch);

}
document.getElementById("add").addEventListener('click', oz_add, true);

function oz_add(event) {
    if (event.code === "NumpadEnter" || event.code === "Enter" || event.button === 0) {
        let rl_t = [document.getElementById("siteName").value, document.getElementById("siteAddress").value]
        if (rl_t[0] === "" || rl_t[1] === "") {
            alert("null");
            document.getElementById('addBox').style.display = "none";
        } else {
            document.getElementById('addBox').style.display = "none";
            link = rl_t[1].indexOf("http");
            if (link == -1) {
                rl_t[1] = "http://" + rl_t[1];
            }
            let dd = {"name": rl_t[0], "value": rl_t[1], "id": 1};
            app[abid].push(dd);
        }
        document.removeEventListener('keydown', oz_add);
        document.addEventListener('keydown', fSearch);
    } else if (event.code === "Escape") {
        document.getElementById('addBox').style.display = "none";
        document.removeEventListener('keydown', oz_add);
        document.addEventListener('keydown', fSearch);
    }
}

//一个作用是可以拖动
for (let i = 0; i < moveItem.length; i++) {
    moveItem[i].ondragstart = function (ev) {
        ev.dataTransfer.setData("Text", this.id);
    }
}
//拖拽元素事件绑定 修改vue对象，vue进行监听；更新；渲染
for (let i of ll) {
    let item = document.getElementById(i);
    item.ondragover = function (ev) {
        ev.preventDefault();
    }
    item.ondrop = function (ev) {
        //防止拖动后触发点击事件
        ev.preventDefault();
        let id = ev.dataTransfer.getData('Text');
        let elem = document.getElementById(id);
        let toElem = ev.target;
        let dd = {"name": elem.innerText, "value": elem.href, "id": elem.id};
        if (toElem.className == 'trigram') {
            app[i].push(dd);
            let oo = elem.parentElement.parentElement;
            app[oo.id].splice(elem.id - app[oo.id][0].id, 1);
        } else {
            app[i].splice(toElem.id - app[i][0].id, 0, dd);
            let oo = elem.parentElement.parentElement;
            app[oo.id].splice(elem.id - app[oo.id][0].id, 1);
            app.watchNum = "elem+toElem";
        }
    }
}
// Escape Enter NumpadEnter
document.addEventListener('keydown', fSearch);
document.getElementById("o_42").addEventListener('click', fSearch, true);

//搜索
function fSearch(event) {
    if (event.code === "NumpadEnter" || event.code === "Enter" || event.button === 0) {
        let select = document.getElementById('sBox').value
        let href;
        switch (select) {
            case "baidu":
                href = "https://www.baidu.com/s?wd=" + document.getElementById("input").value;
                break;
            case "yandex":
                href = "https://yandex.com/search/?text=" + document.getElementById("input").value;
                break;
            case "bing":
                href = "https://cn.bing.com/search?q=" + document.getElementById("input").value;
                break;
            case "google":
                href = "https://www.google.co.jp/search?q=" + document.getElementById("input").value;
                break;
        }
        window.open(href);
    }
}

//时间
function getTime(){
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth();
    let day =date.getDay();
    let hour=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let weekArr=['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日 '];
    let weekday=weekArr[date.getDay()];
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (day >= 0 && day <= 9) {
        day = "0" + day;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    document.getElementById("time").innerText=weekday+" "+hour+":"+minutes+":"+seconds+" "+month+"-"+day;
}
setInterval(getTime,1000);

//随机图片
document.getElementById("customizeImg").onclick=function () {
    let src='https://unsplash.it/1600/900?random'+Math.random();
    let url="url("+src+")";
    document.getElementById("body").style.backgroundImage=url;
}


