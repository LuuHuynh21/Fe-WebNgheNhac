import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NguoiDung } from './nguoidung.model';

@Injectable({
  providedIn: 'root'
})
export class NguoidungService {

  private apiUrl = "http://localhost:8080/api/nguoi-dung";

  constructor(private http: HttpClient) { }

  getAll(): Observable<NguoiDung[]>{
    return this.http.get<NguoiDung[]>(this.apiUrl);
  }
  createND(nguoiDung: NguoiDung): Observable<NguoiDung> {
    const formData: FormData = new FormData();
    formData.append('ma', nguoiDung.ma.toString());
    formData.append('ten', nguoiDung.ten.toString());
    formData.append('email', nguoiDung.email.toString());
    formData.append('matKhau', nguoiDung.matKhau.toString());
    formData.append('trangThai', nguoiDung.trangThai.toString());
    formData.append('ngaySinh', nguoiDung.ngaySinh);
    formData.append('gioiTinh', nguoiDung.gioiTinh.toString());
    formData.append('vaiTro', nguoiDung.vaiTro.id.toString());
    if (nguoiDung.ngayTao) {
      formData.append('ngayTao', nguoiDung.ngayTao.toISOString());
    }
    return this.http.post<NguoiDung>(this.apiUrl, formData);
  }
  getByID(id: number): Observable<NguoiDung> {
    return this.http.get<NguoiDung>(`${this.apiUrl}/${id}`);
  }

  updateND(id: number, nguoiDung: NguoiDung): Observable<NguoiDung> {
    const formData: FormData = new FormData();
    formData.append('ma', nguoiDung.ma.toString());
    formData.append('ten', nguoiDung.ten.toString());
    formData.append('trangThai', nguoiDung.trangThai.toString());
    formData.append('email', nguoiDung.email.toString());
    formData.append('matKhau', nguoiDung.matKhau.toString());
    formData.append('ngaySinh', nguoiDung.ngaySinh.toString());
    formData.append('gioiTinh', nguoiDung.gioiTinh.toString());
    formData.append('vaiTro', nguoiDung.vaiTro.id.toString());

    formData.append('ngaySua', new Date().toISOString()); // Cập nhật ngày sửa

    const url = `${this.apiUrl}/${id}`;
    return this.http.put<NguoiDung>(url, formData);
  }
}
 