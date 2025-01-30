import { Injectable } from '@angular/core';
import { FileInfos } from '../models/FileInfos';

declare global {
  interface Window {
    electronAPI: {
      selectFile: () => Promise<string>;
      sendFileToBackend: (filePath: string) => void;
      gatherFIleInfo:(filePath: string)=> Promise<FileInfos> ;
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
  isAvailable():void {
    if (!window.electronAPI) {
      console.error('Electron API is not available.');
    }
  }
  gatherFIleInfo(filePath:string) : Promise<FileInfos> {
    return window.electronAPI.gatherFIleInfo(filePath);
  }
 
}
