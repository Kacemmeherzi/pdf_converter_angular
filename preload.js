const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  sendMessage: (message) => console.log(message)
});
