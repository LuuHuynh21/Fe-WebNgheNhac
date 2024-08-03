import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheloaiComponent } from './theloai/theloai.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NghesiComponent } from './nghesi/nghesi.component';
import { AlbumComponent } from './album/album.component';
import { BaihatComponent } from './baihat/baihat.component';
import { TopbaihatComponent } from './topbaihat/topbaihat.component';
import { TopalbumComponent } from './topalbum/topalbum.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { TheLoaiDetailComponent } from './the-loai-detail/the-loai-detail.component';
import { NgheSiDetailComponent } from './nghe-si-detail/nghe-si-detail.component';
import { BaiHatDetailComponent } from './bai-hat-detail/bai-hat-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TheloaiComponent,
    NghesiComponent,
    AlbumComponent,
    BaihatComponent,
    TopbaihatComponent,
    TopalbumComponent,
    ViewAlbumComponent,
    ThongkeComponent,
    TheLoaiDetailComponent,
    NgheSiDetailComponent,
    BaiHatDetailComponent,
    AlbumDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
