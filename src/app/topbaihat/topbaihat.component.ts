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
import { TopbaihatService } from './topbaihat.service';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-topbaihat',
  templateUrl: './topbaihat.component.html',
  styleUrls: ['./topbaihat.component.css']
})
export class TopbaihatComponent implements OnInit {
  albums: Album[] = [];
  ngheSis: NgheSi[] = [];
  theLoais: TheLoai[] = [];
  baiHats: BaiHat[] = [];
  currentPage = 0;
  totalPages = 0;

  constructor(private homeService: HomeService,
              private albumService: AlbumService,
              private ngheSiService: NghesiService,
              private theLoaiService: TheloaiService,
              private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.loadAlbum();
    this.loadBaiHat();
    this.loadTheLoai();
    this.loadNgheSi();
  }
  loadBaiHat() {
    this.homeService.phanTrangBH(this.currentPage,100).subscribe(response => {
      this.baiHats = response.content;
      this.musicService.songList = this.baiHats;
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
}
