import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgheSi } from './nghesi.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NghesiService {

  private apiUrl = "http://localhost:8080/api/nghe-si";

  constructor(private http: HttpClient) { }

  getAll(): Observable<NgheSi[]>{
    return this.http.get<NgheSi[]>(this.apiUrl);
  }

  phanTrang(page: number, size: number): Observable<any>{
    let params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(`${this.apiUrl}/phan-trang`,{params});
  }
  createNS(ngheSi: NgheSi, file: File): Observable<NgheSi> {
    const formData: FormData = new FormData();
    formData.append('ma', ngheSi.ma.toString());
    formData.append('ten', ngheSi.ten.toString());
    formData.append('moTa', ngheSi.moTa.toString());
    formData.append('hinhAnh', file);
    if (ngheSi.ngayTao) {
      formData.append('ngayTao', ngheSi.ngayTao.toISOString());
    }
    if (ngheSi.ngaySua) {
      formData.append('ngaySua', ngheSi.ngaySua.toISOString());
    }
    return this.http.post<NgheSi>(this.apiUrl, formData);
  }
  searchNgheSi(ten: string): Observable<NgheSi[]> {
    let params = new HttpParams().set('ten',ten);
    return this.http.get<NgheSi[]>(`${this.apiUrl}/search`,{params});
  }
  getTongNgheSi(): Observable< number > {
    return this.http.get< number>(`${this.apiUrl}/tong-nghe-si`);
  }
  getByID(id: number): Observable<NgheSi> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<NgheSi>(url);
  }
  updateTL(id: number, ngheSi: NgheSi, file?: File): Observable<NgheSi> {
    const formData: FormData = new FormData();
    formData.append('ma', ngheSi.ma.toString());
    formData.append('ten', ngheSi.ten.toString());
    formData.append('moTa', ngheSi.moTa.toString());
    if (file) {
      formData.append('hinhAnh', file);
    }
    formData.append('ngaySua', new Date().toISOString()); // Cập nhật ngày sửa

    const url = `${this.apiUrl}/${id}`;
    return this.http.put<NgheSi>(url, formData);
  }

}
