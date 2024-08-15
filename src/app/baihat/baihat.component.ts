import { Component, OnInit } from '@angular/core';
import { NgheSi } from '../nghesi/nghesi.model';
import { Album } from '../album/album.model';
import { TheLoai } from '../theloai/theloai.model';
import { BaiHat } from './baihat.model';
import { AlbumService } from '../album/album.service';
import { NghesiService } from '../nghesi/nghesi.service';
import { BaihatService } from './baihat.service';
import { TheloaiService } from '../theloai/theloai.service';

@Component({
  selector: 'app-baihat',
  templateUrl: './baihat.component.html',
  styleUrls: ['./baihat.component.css']
})
export class BaihatComponent implements OnInit {
  albums: Album[] = [];
  ngheSis: NgheSi[] = [];
  theLoais: TheLoai[] = [];
  baiHats: BaiHat[] = [];
  newBaiHat: BaiHat = {
    id: 0,
    ma: '',
    ten: '',
    trangThai: true,
    ngheSi:{
      id: 0,
      ma: '',
      ten: '',
      trangThai: true,
      moTa: '',
      hinhAnh: '',
      ngayTao: new Date(),
    },
    theLoai:{
      id: 0,
      ma: '',
      ten: '',
      trangThai: true,
      moTa: '',
      ngayTao: new Date(),
    },
    album:{
      id: 0,
      ma: '',
      ten: '',
      trangThai: true,
      ngheSi: {
        id: 0,
        ma: '',
        ten: '',
        trangThai: true,
        moTa: '',
        hinhAnh: '',
        ngayTao: new Date(),
      },
      hinhAnh: '',
      ngayTao: new Date(),
    },
    thoiLuong: '00:00:00',
    url: '',
    luotNghe: 0,
    ngayTao: new Date()
  };
  selectedFile: File | null = null;
  currentPage = 0;
  totalPages = 0;
  searchTen = '';
  constructor(private baiHatService: BaihatService, private albumService: AlbumService, private ngheSiService: NghesiService, private theLoaiService: TheloaiService) { }
  
  ngOnInit(): void {
    this.loadAlbum();
    this.loadBaiHat();
    this.loadTheLoai();
    this.loadNgheSi();
  }
  loadBaiHat() {
    this.baiHatService.phanTrang(this.currentPage,10).subscribe(response => {
      this.baiHats = response.content;
      this.totalPages = response.totalPages;
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
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addAlbum() {
    if (this.selectedFile) {
      this.baiHatService.createBH(this.newBaiHat, this.selectedFile).subscribe((response: BaiHat) => {
        this.baiHats.push(response);
        this.newBaiHat = {
          id: 0,
          ma: '',
          ten: '',
          trangThai: true,
          ngheSi:{
            id: 0,
            ma: '',
            ten: '',
            trangThai: true,
            moTa: '',
            hinhAnh: '',
            ngayTao: new Date(),
          },
          theLoai:{
            id: 0,
            ma: '',
            ten: '',
            trangThai: true,
            moTa: '',
            ngayTao: new Date(),
          },
          album:{
            id: 0,
            ma: '',
            ten: '',
            trangThai: true,
            ngheSi: {
              id: 0,
              ma: '',
              ten: '',
              trangThai:true,
              moTa: '',
              hinhAnh: '',
              ngayTao: new Date(),
            },
            hinhAnh: '',
            ngayTao: new Date(),
          },
          thoiLuong: '00:00:00',
          url: '',
          luotNghe: 0,
          ngayTao: new Date()
        };
        this.selectedFile = null;
      });
    } else {
      alert('Vui lòng chọn tệp mp3!');
    }
  }
  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadBaiHat();
    }
  }
  searchBaiHat() {
    if (this.searchTen) {
      this.baiHatService.searchBaiHat(this.searchTen).subscribe(response => {
        this.baiHats = response;
        this.totalPages = 1; // Vì kết quả tìm kiếm không phân trang
      });
    } else {
      this.loadTheLoai();
    }
  }
  }
