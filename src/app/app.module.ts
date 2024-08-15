import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { TopbaihatComponent } from './topbaihat/topbaihat.component';
import { TopalbumComponent } from './topalbum/topalbum.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { NguoidungComponent } from './nguoidung/nguoidung.component';
import { VaitroComponent } from './vaitro/vaitro.component';
import { NguoidungdetailComponent } from './nguoidungdetail/nguoidungdetail.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { TheLoaiDetailComponent } from './the-loai-detail/the-loai-detail.component';
import { NgheSiDetailComponent } from './nghe-si-detail/nghe-si-detail.component';
import { BaiHatDetailComponent } from './bai-hat-detail/bai-hat-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { TheloaiComponent } from './theloai/theloai.component';
import { NghesiComponent } from './nghesi/nghesi.component';
import { AlbumComponent } from './album/album.component';
import { BaihatComponent } from './baihat/baihat.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    TopbaihatComponent,
    TopalbumComponent,
    ViewAlbumComponent,
    NguoidungComponent,
    VaitroComponent,
    NguoidungdetailComponent,
    ThongkeComponent,
    TheLoaiDetailComponent,
    NgheSiDetailComponent,
    BaiHatDetailComponent,
    AlbumDetailComponent,
    TheloaiComponent,
    NghesiComponent,
    AlbumComponent,
    BaihatComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
