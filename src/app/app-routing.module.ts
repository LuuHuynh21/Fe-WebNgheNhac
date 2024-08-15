import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TopbaihatComponent } from './topbaihat/topbaihat.component';
import { TopalbumComponent } from './topalbum/topalbum.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { HomeComponent } from './home/home.component';
import { NguoidungComponent } from './nguoidung/nguoidung.component';
import { NguoidungdetailComponent } from './nguoidungdetail/nguoidungdetail.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { TheloaiComponent } from './theloai/theloai.component';
import { TheLoaiDetailComponent } from './the-loai-detail/the-loai-detail.component';
import { NghesiComponent } from './nghesi/nghesi.component';
import { NgheSiDetailComponent } from './nghe-si-detail/nghe-si-detail.component';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { BaihatComponent } from './baihat/baihat.component';
import { BaiHatDetailComponent } from './bai-hat-detail/bai-hat-detail.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'thongke', pathMatch: 'full' },
      { path: 'nguoidung', component: NguoidungComponent },
      { path: 'nguoidung/:id', component: NguoidungdetailComponent },
      { path: 'thongke', component: ThongkeComponent },
      { path: 'theloai', component: TheloaiComponent },
      { path: 'theloai/:id', component: TheLoaiDetailComponent },
      { path: 'nghesi', component: NghesiComponent },
      { path: 'nghesi/:id', component: NgheSiDetailComponent },
      { path: 'album', component: AlbumComponent },
      { path: 'album/:id', component: AlbumDetailComponent },
      { path: 'baihat', component: BaihatComponent },
      { path: 'baihat/:id', component: BaiHatDetailComponent },
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'top', component: TopbaihatComponent },
      { path: 'topAB', component: TopalbumComponent },
      { path: 'topAB/:id', component: ViewAlbumComponent },
      { path: 'home', component: HomeComponent },
    ]
  },
  { path: 'login' , component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect mặc định
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
