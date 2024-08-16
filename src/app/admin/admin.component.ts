import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private authService: LoginService, private router: Router) {}

  logout() {
    // Xóa token khỏi localStorage
    this.authService.logout();

    // Điều hướng về trang đăng nhập
    this.router.navigate(['/login']);
  }
}
