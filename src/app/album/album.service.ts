import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './album.model';
import { BaiHat } from '../baihat/baihat.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = "http://localhost:8080/api/album";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Album[]>{
    return this.http.get<Album[]>(this.apiUrl);
  }

  phanTrang(page: number, size: number): Observable<any>{
    let params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(`${this.apiUrl}/phan-trang`,{params});
  }
  createAB(album: Album, file: File): Observable<Album> {
    const formData: FormData = new FormData();
    formData.append('ma', album.ma.toString());
    formData.append('ten', album.ten.toString());
    formData.append('trangThai', album.trangThai.toString());
    formData.append('ngheSi', album.ngheSi.id.toString());
    formData.append('hinhAnh', file);
    if (album.ngayTao) {
      formData.append('ngayTao', album.ngayTao.toISOString());
    }
    if (album.ngaySua) {
      formData.append('ngaySua', album.ngaySua.toISOString());
    }  
    return this.http.post<Album>(this.apiUrl, formData);
  }
  
  searchAlbum(ten: string): Observable<Album[]> {
    let params = new HttpParams().set('ten',ten);
    return this.http.get<Album[]>(`${this.apiUrl}/search`,{params});
  }
  
  getByID(id: number): Observable<Album> {
    const url = `${this.apiUrl}/detail/${id}`;
    return this.http.get<Album>(url);
  }
  updateAB(id: number, album: Album, file?: File): Observable<Album> {
    const formData: FormData = new FormData();
    formData.append('ma', album.ma.toString());
    formData.append('ten', album.ten.toString());
    formData.append('trangThai', album.trangThai.toString());
    formData.append('ngheSi', album.ngheSi.id.toString());
    if (file) {
      formData.append('hinhAnh', file);
    }
    formData.append('ngaySua', new Date().toISOString()); // Cập nhật ngày sửa

    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Album>(url, formData);
  }

}
