import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TheLoai } from './theloai.model';
import { BaiHat } from '../baihat/baihat.model';

@Injectable({
  providedIn: 'root'
})
export class TheloaiService {
  private apiUrl = "http://localhost:8080/api/the-loai"

  constructor(private http: HttpClient) { }

  getAll(): Observable<TheLoai[]> {
    return this.http.get<TheLoai[]>(this.apiUrl);
  }

  phanTrang(page: number, size: number): Observable<any>{
    let params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(`${this.apiUrl}/phan-trang`,{params});
  }

  searchTheLoai(ten: string): Observable<TheLoai[]> {
    let params = new HttpParams().set('ten',ten);
    return this.http.get<TheLoai[]>(`${this.apiUrl}/search`,{params});
  }

  createTL(theLoai: TheLoai): Observable<TheLoai> {
    return this.http.post<TheLoai>(this.apiUrl, theLoai);
  }
  getByID(id: number): Observable<TheLoai> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<TheLoai>(url);
  }
  updateTL(id: number, theLoai: TheLoai): Observable<TheLoai>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<TheLoai>(url,theLoai);
  }
  deleteTL(id: number): Observable<TheLoai>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<TheLoai>(url);
  }
  getTheLoaiById(theLoaiId: number): Observable<BaiHat[]> {
    return this.http.get<BaiHat[]>(`${this.apiUrl}/bai-hat/${theLoaiId}`);
  }
}
