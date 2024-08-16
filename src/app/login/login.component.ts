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
        
        // Điều hướng đến trang admin và reload trang để sử dụng token mới nhất
        this.router.navigate(['/admin']).then(() => {
          location.reload();  // Reload trang để đảm bảo sử dụng token mới nhất
        });
      },
      error: (err) => {
        this.errorMessage = 'Email hoặc mật khẩu không chính xác';
      }
    });
  }
}
