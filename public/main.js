const {app,BrowserWindow, ipcRenderer} = require('electron')
require('@electron/remote/main').initialize()

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Sinameki's Playground",
        icon: __dirname+"/favicon.ico",
        webPreferences: {
            enableRemoteModule: true
        }
    })
    win.setResizable(false)
    win.setAutoHideMenuBar(true)

    win.loadURL("http://localhost:3000")
}

app.on('ready',createWindow)
