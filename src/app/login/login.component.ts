import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  matKhau: string = '';
  errorMessage: string = '';

  constructor(private authService: LoginService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.matKhau).subscribe({
      next: (response) => {
        this.authService.saveTokens({ token: response.token, refeshToken: response.refeshToken });
        // Chuyển hướng đến /admin và sau đó tải lại trang
        this.router.navigate(['/admin']).then(() => {
          // Đợi điều hướng hoàn tất trước khi tải lại trang
          location.reload();
        });
      },
      error: (err) => {
        this.errorMessage = 'Email hoặc mật khẩu không chính xác';
      }
    });
  }
}
