const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      
      
    },
  });

  // Load the Angular app from the dist folder (after build)
  // //? hethi for prod
  /* 
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/electron-angular-app/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );
  */
 // * for dev
 win.loadURL('http://localhost:4200')


  // Open dev tools
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (win === null) createWindow();
});
