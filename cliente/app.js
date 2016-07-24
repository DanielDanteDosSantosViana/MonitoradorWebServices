const electron = require('electron');
app = electron.app,
BrowserWindow = electron.BrowserWindow

var ipc = electron.ipcMain;

var mainWindow = null;
var homeWindow = null;

//MAIN
function createMainWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600,frame: false,icon: __dirname + '/view/fonts/6_Primary_logo_on_color2_263x75.png' })
  mainWindow.loadURL('file://'+__dirname+'/view/main/main.html');
  mainWindow.on('closed', function () {
  mainWindow = null
 })
  //mainWindow.openDevTools();
}

//HOME
function createHomeWindow(){
   homeWindow = new BrowserWindow({width: 1200, height: 600,  show: false, icon: __dirname + '/view/fonts/6_Primary_logo_on_color2_263x75.png' })
  homeWindow.loadURL('file://'+__dirname+'/view/main/Teste.html');
  homeWindow.on('closed', function () {
    homeWindow = null;
    app.quit();
  })

}

app.on('ready', createMainWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createMainWindow()
  }
})

ipc.on('open-homeView', function(event, arg) {
  mainWindow.hide();
  createHomeWindow();
  homeWindow.maximize();
  homeWindow.show();

})

