const { app, BrowserWindow, ipcMain } = require("electron");

const startApp = ()=>{
    // open splash screen first
    let window = new BrowserWindow({
        frame: false,
        transparent: true,
        width: 250,
        height: 300,
        icon: "resources/icons/icon.png",
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    window.loadFile("splash/splash.html");

    window.removeMenu();
    window.show();

    ipcMain.on("load", ()=>{
        win = new BrowserWindow({
            frame: false,
            transparent: true,
            icon: "resources/icons/icon.png",
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            }
        });
        win.loadFile("app/index.html");
        win.removeMenu();
        win.show();

        window.close();
    });
}

app.whenReady().then(startApp);
app.on("activate", startApp);