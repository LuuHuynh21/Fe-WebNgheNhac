import { Component, OnInit } from '@angular/core';
import { Album } from '../album/album.model';
import { NgheSi } from '../nghesi/nghesi.model';
import { TheLoai } from '../theloai/theloai.model';
import { BaiHat } from '../baihat/baihat.model';
import { BaihatService } from '../baihat/baihat.service';
import { AlbumService } from '../album/album.service';
import { NghesiService } from '../nghesi/nghesi.service';
import { TheloaiService } from '../theloai/theloai.service';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  albums: Album[] = [];
  ngheSis: NgheSi[] = [];
  theLoais: TheLoai[] = [];
  baiHats: BaiHat[] = [];
  
  currentPageBaiHat = 0;
  totalPagesBaiHat = 0;
  
  currentPageAlbum = 0;
  totalPagesAlbum = 0;
  baiHatsByGenre: { [key: number]: BaiHat[] } = {};

  constructor(private baiHatService: BaihatService,
              private albumService: AlbumService,
              private ngheSiService: NghesiService,
              private theLoaiService: TheloaiService,
              private musicService: MusicService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadAlbum();
    this.loadBaiHat();
    this.loadTheLoai();
    this.loadNgheSi();
  }

  loadBaiHat() {
    this.baiHatService.phanTrang(this.currentPageBaiHat, 5).subscribe(response => {
      this.baiHats = response.content;
      this.totalPagesBaiHat = response.totalPages;
      this.musicService.songList = this.baiHats;
      console.log(this.baiHats);
    });
  }

  loadTheLoai() {
    this.theLoaiService.getAll().subscribe(response => {
      this.theLoais = response;
      this.loadSongsForAllGenres();
      console.log(this.theLoais);
    });
  }

  loadAlbum() {
    this.albumService.phanTrang(this.currentPageAlbum, 5).subscribe(response => {
      this.albums = response.content;
      this.totalPagesAlbum = response.totalPages;
      console.log(this.albums);
    });
  }

  loadNgheSi() {
    this.ngheSiService.getAll().subscribe(response => {
      this.ngheSis = response;
      console.log(this.ngheSis);
    });
  }

  playSong(baihat: BaiHat) {
    this.musicService.playSong(baihat);
    console.log('Playing song:', baihat);
  }

  togglePlayPause(baihat: BaiHat) {
    this.musicService.playSong(baihat);
  }

  isPlaying(baihat: BaiHat): boolean {
    return this.musicService.currentSong?.id === baihat.id && this.musicService.isPlaying;
  }

  goToAlbumDetails(albumId: number) {
    this.router.navigate(['/topAB', albumId]);
  }

  nextPageBaiHat() {
    if (this.currentPageBaiHat < this.totalPagesBaiHat - 1) {
      this.currentPageBaiHat++;
      this.loadBaiHat();
    }
  }

  previousPageBaiHat() {
    if (this.currentPageBaiHat > 0) {
      this.currentPageBaiHat--;
      this.loadBaiHat();
    }
  }

  nextPageAlbum() {
    if (this.currentPageAlbum < this.totalPagesAlbum - 1) {
      this.currentPageAlbum++;
      this.loadAlbum();
    }
  }

  previousPageAlbum() {
    if (this.currentPageAlbum > 0) {
      this.currentPageAlbum--;
      this.loadAlbum();
    }
  }
  loadSongsForAllGenres() {
    this.theLoais.forEach(theLoai => {
      this.theLoaiService.getTheLoaiById(+theLoai.id).subscribe(songs => {
        this.baiHatsByGenre[+theLoai.id] = songs;
      });
    });
  }
}
