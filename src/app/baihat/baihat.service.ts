import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaiHat } from './baihat.model';

@Injectable({
  providedIn: 'root'
})
export class BaihatService {

  private apiUrl = "http://localhost:8080/api/bai-hat";

  constructor(private http: HttpClient) { }

  getAll(): Observable<BaiHat[]>{
    return this.http.get<BaiHat[]>(this.apiUrl);
  }

  phanTrang(page: number, size: number): Observable<any>{
    let params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(`${this.apiUrl}/phan-trang`,{params});
  }

  createBH(baiHat: BaiHat, mp3 : File): Observable<BaiHat> {
    const formData: FormData = new FormData();
    formData.append('ma', baiHat.ma.toString());
    formData.append('ten', baiHat.ten.toString());
    formData.append('thoiLuong', baiHat.thoiLuong.toString());
    formData.append('luotNghe', baiHat.luotNghe.toString());
    formData.append('ngheSi', baiHat.ngheSi.id.toString());
    formData.append('album', baiHat.album.id.toString());
    formData.append('theLoai', baiHat.theLoai.id.toString());
    formData.append('url', mp3);
    if (baiHat.ngayTao) {
      formData.append('ngayTao', baiHat.ngayTao.toISOString());
    }
    if (baiHat.ngaySua) {
      formData.append('ngaySua', baiHat.ngaySua.toISOString());
    }  
    return this.http.post<BaiHat>(this.apiUrl, formData);
  }

  searchBaiHat(ten: string): Observable<BaiHat[]> {
    let params = new HttpParams().set('ten',ten);
    return this.http.get<BaiHat[]>(`${this.apiUrl}/search`,{params});
  }

  getTongLuotNghe(): Observable< number > {
    return this.http.get< number>(`${this.apiUrl}/tong-luot-nghe`);
  }
  getByID(id: number): Observable<BaiHat> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BaiHat>(url);
  }
  updateBH(id: number, baiHat: BaiHat, mp3: File): Observable<BaiHat> {
    const formData: FormData = new FormData();
    formData.append('ma', baiHat.ma.toString());
    formData.append('ten', baiHat.ten.toString());
    formData.append('thoiLuong', baiHat.thoiLuong.toString());
    formData.append('ngheSi', baiHat.ngheSi.id.toString());
    formData.append('album', baiHat.album.id.toString());
    formData.append('theLoai', baiHat.theLoai.id.toString());
    if (mp3) {
      formData.append('url', mp3);
    }
    formData.append('ngaySua', new Date().toISOString()); // Cập nhật ngày sửa

    const url = `${this.apiUrl}/${id}`;
    return this.http.put<BaiHat>(url, formData);
  }

}
