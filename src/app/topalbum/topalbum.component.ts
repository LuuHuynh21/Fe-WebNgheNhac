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
  constructor(private baiHatService: BaihatService,
    private albumService: AlbumService,
    private ngheSiService: NghesiService,
    private theLoaiService: TheloaiService,
    private router: Router
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
    this.albumService.getAll().subscribe(response => {
      this.albums = response;
      console.log(this.albums)
    })
  }
  loadNgheSi() {
    this.ngheSiService.getAll().subscribe(response => {
      this.ngheSis = response;
      console.log(this.ngheSis)
    })
  }
  goToAlbumDetails(albumId: number) {
    this.router.navigate(['/topAB', albumId]);
  }
}
