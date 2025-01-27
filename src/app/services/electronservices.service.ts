import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})
export class ElectronservicesService {
  private electronAPI : any ;
  constructor() {
    if ((window as any).electronAPI) {
      this.electronAPI = (window as any).electronAPI;
    }
  }
}
