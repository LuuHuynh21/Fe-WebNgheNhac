import { Component,OnInit } from '@angular/core';
import { NgheSi } from './nghesi.model';
import { NghesiService } from './nghesi.service';

@Component({
  selector: 'app-nghesi',
  templateUrl: './nghesi.component.html',
  styleUrls: ['./nghesi.component.css']
})
export class NghesiComponent implements OnInit {

  ngheSis: NgheSi[] = [];
  newNgheSi: NgheSi = {
    id: 0,
    ma: '',
    ten: '',
    trangThai:true,
    moTa: '',
    hinhAnh: '',
    ngayTao: new Date()
  };
  selectedFile: File | null = null;
  currentPage = 0;
  totalPages = 0;
  searchTen = '';
  constructor(private ngheSiService : NghesiService){}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  ngOnInit(): void {
    this.loadNgheSi();
  }

  loadNgheSi() {
    this.ngheSiService.phanTrang(this.currentPage,10).subscribe(response => {
      this.ngheSis = response.content;
      this.totalPages = response.totalPages;
      console.log(this.ngheSis);
    });
  }
  addNgheSi() {
    if (this.selectedFile) {
      this.ngheSiService.createNS(this.newNgheSi, this.selectedFile).subscribe((response: NgheSi) => {
        this.ngheSis.push(response);
        this.newNgheSi = {
          id: 0,
          ma: '',
          ten: '',
          trangThai:true,
          moTa: '',
          hinhAnh: '',
          ngayTao: new Date()
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
      this.loadNgheSi();
    }
  }
  searchNgheSi() {
    if (this.searchTen) {
      this.ngheSiService.searchNgheSi(this.searchTen).subscribe(response => {
        this.ngheSis = response;
        this.totalPages = 1; // Vì kết quả tìm kiếm không phân trang
      });
    } else {
      this.loadNgheSi();
    }
  }
}
