import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.models';
import { Refesh } from './refesh.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  // Hàm gọi API đăng nhập
  login(email: string, matKhau: string): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/login`, { email, matKhau });
  }

  // Hàm gọi API để làm mới token
  refreshToken(token: string): Observable<Refesh> {
    return this.http.post<Refesh>(`${this.apiUrl}/refesh`, { token });
  }

  // Lưu token và refreshToken vào localStorage
  saveTokens(tokens: { token: string, refeshToken: string }) {
    localStorage.setItem('accessToken', tokens.token);
    localStorage.setItem('refreshToken', tokens.refeshToken);
  }

  // Xóa token khi đăng xuất
  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  // Lấy access token từ localStorage
  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  // Lấy refresh token từ localStorage
  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  
}
