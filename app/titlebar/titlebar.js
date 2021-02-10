const $=(s)=>{return document.querySelector(s);}

const c = $("#close");
const mx = $("#maximize");
const mz = $("#minimize");

const mxi = $("#mig");

const e = require("electron");
const r = e.remote;
const w = r.getCurrentWindow();

const p = ()=>{
    if(w.isMaximized()) {
        mxi.src="../resources/icons/maximized.svg";
        document.querySelector("#titlebar").style.borderTopLeftRadius="0px";
        document.querySelector("#titlebar").style.borderTopRightRadius="0px";
    } else {
        mxi.src="../resources/icons/minimized.svg";
        document.querySelector("#titlebar").style.borderTopLeftRadius="5px";
        document.querySelector("#titlebar").style.borderTopRightRadius="5px";
    }

    w.setBackgroundColor("#00000000");

    requestAnimationFrame(p);
}

p();

c.onclick = ()=>{
    w.close();
}
mx.onclick = ()=>{
    if(w.isMaximized()) {
        w.unmaximize();
        mxi.src="../resources/icons/minimized.svg";
        document.querySelector("#titlebar").style.borderTopLeftRadius="5px";
        document.querySelector("#titlebar").style.borderTopRightRadius="5px";
    } else {
        w.maximize();
        document.querySelector("#titlebar").style.borderTopLeftRadius="0px";
        document.querySelector("#titlebar").style.borderTopRightRadius="0px";
        mxi.src="../resources/icons/maximized.svg";
    }
}
mz.onclick = ()=>{
    w.minimize();
}