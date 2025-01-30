import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../services/electronservices.service';
import { FileInfos } from '../models/FileInfos';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  fileInfos: FileInfos = new FileInfos();
  isFileSelected: boolean = false;
  buttonDefaultText: string = 'Upload';
  //buttonBaxkgroundColor: string = 'blue';
  constructor(private electronService: ElectronService) {}

  async onFileSelected(): Promise<void> {
    await this.electronService.selectFile().then((filePath: string) => {
      this.fileInfos.Path = filePath;
      // console.log(this.filePath.Path);
    });

    if (this.fileInfos.Path) {
      this.fileInfos = await this.electronService.gatherFIleInfo(
        this.fileInfos.Path
      );
      this.isFileSelected = true;
      console.log(this.fileInfos);
      this.buttonDefaultText = 'Delete'
      
    }
  }
  removeFile(): void {
    this.isFileSelected = false;
    this.fileInfos = new FileInfos();
    this.buttonDefaultText = 'UpLoad';
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
