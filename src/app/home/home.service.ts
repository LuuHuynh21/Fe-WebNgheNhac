import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaiHat } from '../baihat/baihat.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = "http://localhost:8080/api/home";

  constructor(private http: HttpClient) { }
  phanTrangBHHome(page: number, size: number): Observable<any>{
    let params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(`${this.apiUrl}/bai-hat/random`,{params});
  }
  getTheLoaiById(theLoaiId: number): Observable<BaiHat[]> {
    return this.http.get<BaiHat[]>(`${this.apiUrl}/the-loai/${theLoaiId}`);
  }
  search(ten: string): Observable<any[]> {
    let params = new HttpParams().set('ten',ten);
    return this.http.get<any[]>(`${this.apiUrl}/search`,{params});
  }
  phanTrangAB(page: number, size: number): Observable<any>{
    let params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(`${this.apiUrl}/album`,{params});
  }
  getAlbumById(id: number): Observable<BaiHat[]> {
    return this.http.get<BaiHat[]>(`${this.apiUrl}/album/${id}`);
  }
  phanTrangBH(page: number, size: number): Observable<any>{
    let params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(`${this.apiUrl}/bai-hat`,{params});
  }
  phanTrangTL(page: number, size: number): Observable<any>{
    let params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(`${this.apiUrl}/the-loai`,{params});
  }
}
