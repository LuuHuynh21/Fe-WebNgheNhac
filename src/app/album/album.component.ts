import { Component, OnInit } from '@angular/core';
import { Album } from './album.model';
import { AlbumService } from './album.service';
import { NgheSi } from '../nghesi/nghesi.model';
import { NghesiService } from '../nghesi/nghesi.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];
  ngheSis: NgheSi[] = [];
  newAlbum: Album = {
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
    baiHats: [],
  };
  selectedFile: File | null = null;
  currentPage = 0;
  totalPages = 0;
  searchTen = '';
  constructor(private albumService: AlbumService, private ngheSiService: NghesiService) {}

  ngOnInit(): void {
    this.loadAlbum();
    this.loadNgheSi();
  }

  loadAlbum() {
    this.albumService.phanTrang(this.currentPage,10).subscribe(response => {
      this.albums = response.content;
      this.totalPages = response.totalPages;
      console.log(this.albums);
    });
  }

  loadNgheSi() {
    this.ngheSiService.getAll().subscribe(response => {
      this.ngheSis = response;
      console.log(this.ngheSis);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addAlbum() {
    if (this.selectedFile) {
      this.albumService.createAB(this.newAlbum, this.selectedFile).subscribe((response: Album) => {
        this.albums.push(response);
        this.newAlbum = {
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
          baiHats: [],
        };
        this.selectedFile = null;
      });
    } else {
      alert('Vui lòng chọn tệp hình ảnh!');
    }
  }
  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadAlbum();
    }
  }
  searchAlbum() {
    if (this.searchTen) {
      this.albumService.searchAlbum(this.searchTen).subscribe(response => {
        this.albums = response;
        this.totalPages = 1; // Vì kết quả tìm kiếm không phân trang
      });
    } else {
      this.loadAlbum();
    }
  }
}
