const remote = require("electron").remote;
const dialog = remote.dialog;

remote.getCurrentWindow().setMinimumSize(800, 662);

let path = "C:\\ && ";
onload = ()=>{
    document.querySelector("#execute_in_path").onclick = ()=>{
        const p = dialog.showOpenDialog({
            properties: ['openDirectory']
        });
        p.then(res=>{
            path = res.filePaths[0] + "\\ && ";
        });
    }
};