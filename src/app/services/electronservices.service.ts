import { Injectable } from '@angular/core';

declare global {
  interface Window {
    electronAPI: {
      selectFile: () => Promise<string>;
      sendFileToBackend: (filePath: string) => void;
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  constructor() {}

  // Open the file dialog and return the selected file path
  selectFile(): Promise<string> {
    return window.electronAPI.selectFile();
  }

 
}
