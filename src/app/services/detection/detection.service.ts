import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetectionService {

  private apiUrl = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

    // Post
    uploadImage(file: File): Observable<any> {
      const formData = new FormData()
      formData.append('image', file)
      return this.http.post(`${this.apiUrl}/predict`, formData)
    }
  
    // Get
    getProcessedImage(): Observable<Blob> {
      return this.http.get(`${this.apiUrl}/outputs`, {responseType: 'blob'})
    }

}
