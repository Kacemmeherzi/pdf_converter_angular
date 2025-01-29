const { app, BrowserWindow, ipcMain, dialog } = require("electron"); 
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname,"preload.js"),
      contextIsolation: true,
    },
  });
  console.log("Preload Path:", path.join(__dirname, "preload.js"));

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
  win.loadURL("http://localhost:4200");

  // Open dev tools
  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}
ipcMain.handle("open-file-dialog", async () => {
  const result = await dialog.showOpenDialog({
    title: "Select a PDF File",
    filters: [{ name: "PDF Files", extensions: ["pdf"] }],
    properties: ["openFile"],
  });

  if (!result.canceled && result.filePaths.length > 0) {
    return result.filePaths[0]; // Return selected file path
  }

  return ""; // Return empty if no file selected
});


app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (win === null) createWindow();
});
