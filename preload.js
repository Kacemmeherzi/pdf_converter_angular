const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  selectFile: () => ipcRenderer.invoke("open-file-dialog"),

  gatherFIleInfo: (filePath) => ipcRenderer.invoke("get-file-info", filePath),
});
