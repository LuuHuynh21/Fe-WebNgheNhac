import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThongkeService {
  private apiUrl = "http://localhost:8080/api/thong-ke"

  constructor(private http: HttpClient) { }

  getTongNgheSi(): Observable< number > {
    return this.http.get< number>(`${this.apiUrl}/tong-nghe-si`);
  }
  getTongAlbum(): Observable< number > {
    return this.http.get< number>(`${this.apiUrl}/tong-album`);
  }
  getTongLuotNghe(): Observable< number > {
    return this.http.get< number>(`${this.apiUrl}/tong-luot-nghe`);
  }
}
