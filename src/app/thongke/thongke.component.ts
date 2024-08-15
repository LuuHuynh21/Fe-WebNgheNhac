import { Component, OnInit } from '@angular/core';
import { BaihatService } from '../baihat/baihat.service';
import { AlbumService } from '../album/album.service';
import { NghesiService } from '../nghesi/nghesi.service';
import { ThongkeService } from './thongke.service';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit{
  tongLuotNghe: number = 0;
  tongAlbum: number = 0;
  tongNgheSi: number = 0;

  constructor( private thongKeService: ThongkeService) { }

  ngOnInit(): void {
    this.loadTongLuotNghe();
    this.loadTongAlbum();
    this.loadTongNgheSi();
  }

  loadTongLuotNghe(): void {
    this.thongKeService.getTongLuotNghe().subscribe(
      response => {
        this.tongLuotNghe = response;
      },
      error => {
        console.error('Error loading total listens', error);
      }
    );
  }

  loadTongAlbum(): void {
    this.thongKeService.getTongAlbum().subscribe(
      response => {
        this.tongAlbum = response;
      },
      error => {
        console.error('Error loading total listens', error);
      }
    );
  }
  loadTongNgheSi(): void {
    this.thongKeService.getTongNgheSi().subscribe(
      response => {
        this.tongNgheSi = response;
      },
      error => {
        console.error('Error loading total listens', error);
      }
    );
  }
}
