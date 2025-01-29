import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../services/electronservices.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  selectedFile: File | null = null;

  constructor(private electronService: ElectronService) {}

  ngOnInit(): void {
    if (!window.electronAPI) {
      console.error('Electron API is not available.');
    }
  }
  onFileSelected(): void {
    this.electronService.selectFile().then((file : string)=>{
      console.log(file);
      
    });
  }
}
/*
  readPdf(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const pdfData = reader.result;
      console.log('PDF content:', pdfData);
    };
    reader.readAsArrayBuffer(file);
  }*/
