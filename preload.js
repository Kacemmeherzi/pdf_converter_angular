const { contextBridge,ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  sendMessage: (message) => console.log(message),
  selectFile: () => ipcRenderer.invoke('open-file-dialog'),

});

