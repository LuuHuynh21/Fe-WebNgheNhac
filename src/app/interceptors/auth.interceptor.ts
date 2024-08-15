import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
import { Refesh } from '../login/refesh.models';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();
    let authReq = req;
    if (accessToken) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !req.url.includes('/api/auth/refesh')) {
          // Token hết hạn, yêu cầu refresh token
          const refreshToken = this.authService.getRefreshToken();
          if (refreshToken) {
            return this.authService.refreshToken(refreshToken).pipe(
              switchMap((response: Refesh) => {
                const newToken = response.token;
                this.authService.saveTokens({ token: newToken, refeshToken: refreshToken });
                const clonedRequest = req.clone({
                  headers: req.headers.set('Authorization', `Bearer ${newToken}`)
                });
                return next.handle(clonedRequest);
              }),
              catchError((err) => {
                // Xử lý lỗi nếu làm mới token không thành công
                this.authService.logout();
                return throwError(err);
              })
            );
          } else {
            // Không có refresh token, yêu cầu đăng nhập lại
            this.authService.logout();
            return throwError(error);
          }
        } else {
          return throwError(error);
        }
      })
    );
  }
}
