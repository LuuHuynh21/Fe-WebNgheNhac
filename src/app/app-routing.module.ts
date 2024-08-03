import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheloaiComponent } from './theloai/theloai.component';
import { NghesiComponent } from './nghesi/nghesi.component';
import { AlbumComponent } from './album/album.component';
import { BaihatComponent } from './baihat/baihat.component';
import { TopbaihatComponent } from './topbaihat/topbaihat.component';
import { TopalbumComponent } from './topalbum/topalbum.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { TheLoaiDetailComponent } from './the-loai-detail/the-loai-detail.component';
import { NgheSiDetailComponent } from './nghe-si-detail/nghe-si-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { BaiHatDetailComponent } from './bai-hat-detail/bai-hat-detail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'theloai', component: TheloaiComponent},
  {path: 'theloai/:id', component: TheLoaiDetailComponent},
  {path: 'nghesi', component: NghesiComponent},
  {path: 'nghesi/:id', component: NgheSiDetailComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'album/:id', component: AlbumDetailComponent},
  {path: 'baihat', component: BaihatComponent},
  {path: 'baihat/:id', component: BaiHatDetailComponent},
  {path: 'top', component: TopbaihatComponent},
  {path: 'topAB', component: TopalbumComponent},
  {path: 'topAB/:id', component: ViewAlbumComponent},
  {path: '', component: ThongkeComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
