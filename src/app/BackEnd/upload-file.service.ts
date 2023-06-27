import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadedFile } from '../file/UploadedFile';
import { UploadFileComponent } from '../upload-file/upload-file.component';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(file: File, userId: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/${userId}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getListFiles(userId: number): Observable<UploadedFile[]> {
    return this.http.get<UploadedFile[]>(`${this.baseUrl}/${userId}/files`);
  }
}