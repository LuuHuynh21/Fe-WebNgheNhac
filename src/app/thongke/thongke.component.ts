import { Component, OnInit } from '@angular/core';
import { BaihatService } from '../baihat/baihat.service';
import { AlbumService } from '../album/album.service';
import { NghesiService } from '../nghesi/nghesi.service';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit{
  tongLuotNghe: number = 0;
  tongAlbum: number = 0;
  tongNgheSi: number = 0;

  constructor(private baihatService: BaihatService,private albumService: AlbumService, private ngheSiService: NghesiService) { }

  ngOnInit(): void {
    this.loadTongLuotNghe();
    this.loadTongAlbum();
    this.loadTongNgheSi();
  }

  loadTongLuotNghe(): void {
    this.baihatService.getTongLuotNghe().subscribe(
      response => {
        this.tongLuotNghe = response;
      },
      error => {
        console.error('Error loading total listens', error);
      }
    );
  }

  loadTongAlbum(): void {
    this.albumService.getTongAlbum().subscribe(
      response => {
        this.tongAlbum = response;
      },
      error => {
        console.error('Error loading total listens', error);
      }
    );
  }
  loadTongNgheSi(): void {
    this.ngheSiService.getTongNgheSi().subscribe(
      response => {
        this.tongNgheSi = response;
      },
      error => {
        console.error('Error loading total listens', error);
      }
    );
  }
}
