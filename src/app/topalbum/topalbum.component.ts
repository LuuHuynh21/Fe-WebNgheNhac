import { Component } from '@angular/core';
import { Album } from '../album/album.model';
import { NgheSi } from '../nghesi/nghesi.model';
import { TheLoai } from '../theloai/theloai.model';
import { BaiHat } from '../baihat/baihat.model';
import { BaihatService } from '../baihat/baihat.service';
import { AlbumService } from '../album/album.service';
import { NghesiService } from '../nghesi/nghesi.service';
import { TheloaiService } from '../theloai/theloai.service';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';


@Component({
  selector: 'app-topalbum',
  templateUrl: './topalbum.component.html',
  styleUrls: ['./topalbum.component.css']
})
export class TopalbumComponent {
  albums: Album[] = [];
  ngheSis: NgheSi[] = [];
  theLoais: TheLoai[] = [];
  baiHats: BaiHat[] = [];
  currentPage = 0;
  totalPages = 0;

  constructor(private baiHatService: BaihatService,
    private ngheSiService: NghesiService,
    private theLoaiService: TheloaiService,
    private router: Router,
    private homeService : HomeService
    // private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.loadAlbum();
    this.loadBaiHat();
    this.loadTheLoai();
    this.loadNgheSi();
  }
  loadBaiHat() {
    this.baiHatService.getAll().subscribe(response => {
      this.baiHats = response;
      console.log(this.baiHats);
    });
  }
  loadTheLoai() {
    this.theLoaiService.getAll().subscribe(response => {
      this.theLoais = response;
      console.log(this.theLoais)
    })
  }
  loadAlbum() {
    this.homeService.phanTrangAB(this.currentPage, 5).subscribe(response => {
      this.albums = response.content;
      this.totalPages = response.totalPages;
      console.log(this.albums);
    });
  }
  loadNgheSi() {
    this.ngheSiService.getAll().subscribe(response => {
      this.ngheSis = response;
      console.log(this.ngheSis)
    })
  }
  goToAlbumDetails(albumId: number) {
    this.router.navigate(['/user/topAB', albumId]);
  }
}
