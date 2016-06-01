const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600,frame: false,icon: __dirname + '/view/fonts/6_Primary_logo_on_color2_263x75.png' })
  mainWindow.loadURL('file://'+__dirname+'/view/index.html');
  mainWindow.setMenu(null);
  mainWindow.on('closed', function () {
  mainWindow = null
 })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

