import { HttpErrorResponse, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../authentif/register-payload';
import { UploadFileService } from '../BackEnd/upload-file.service';
import { UploadedFile } from '../file/UploadedFile';
import FileSaver from 'file-saver';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {


  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
currentUser: RegisterPayload;
  fileInfos: UploadedFile[];

  constructor(private uploadService: UploadFileService, private localStorageService: LocalStorageService) {
    this.currentUser= localStorageService.retrieve('user');

   }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  upload() {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile, this.currentUser.id).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // = this.uploadService.getListFiles(this.currentUser.id);

        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
  
    this.selectedFiles = undefined;
  }

  

 downloadFile(file: UploadedFile) {
    var a = document.createElement("a");
 
    a.style.display = "none";
    
    var json = JSON.stringify(file.data);
    const blob = new Blob([this.base64ToArrayBuffer(file.data)] , {type: "application/json"});
    const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = file.name;
        a.click();
        window.URL.revokeObjectURL(url);
  
};


 base64ToArrayBuffer(base64) {
  var binaryString = window.atob(base64);
  var binaryLen = binaryString.length;
  var bytes = new Uint8Array(binaryLen);
  for (var i = 0; i < binaryLen; i++) {
     var ascii = binaryString.charCodeAt(i);
     bytes[i] = ascii;
  }
  return bytes;
}



  ngOnInit() {
   // this.fileInfos = this.uploadService.getListFiles(this.currentUser.id);
    
    this.uploadService.getListFiles(this.currentUser.id).subscribe(
      (response: UploadedFile[]) => {
        this.fileInfos = response;
         
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
  }
}

