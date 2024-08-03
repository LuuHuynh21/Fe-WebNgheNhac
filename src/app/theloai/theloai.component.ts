import { Component, OnInit } from '@angular/core';
import { TheLoai } from './theloai.model';
import { TheloaiService } from './theloai.service';


@Component({
  selector: 'app-theloai',
  templateUrl: './theloai.component.html',
  styleUrls: ['./theloai.component.css']
})
export class TheloaiComponent implements OnInit {
  theloais: TheLoai[] = [];
  newTheLoai: TheLoai = {
    id: 0,
    ma: '',
    ten: '',
    moTa: '',
    ngayTao: new Date(),
   
  };
  currentPage = 0;
  totalPages = 0;
  searchTen = '';
  constructor(private theloaiService: TheloaiService) { }

  ngOnInit(): void {
    this.loadTheLoai();
  }

  loadTheLoai() {
    this.theloaiService.phanTrang(this.currentPage,10).subscribe(response => {
      this.theloais = response.content;
      this.totalPages = response.totalPages;
      console.log(this.theloais);
    });
  }
  addTheLoai() {
    this.theloaiService.createTL(this.newTheLoai).subscribe((response: TheLoai) => {
      this.theloais.push(response);
      this.newTheLoai = {
        id: 0,
        ma: '',
        ten: '',
        moTa: '',
        ngayTao: new Date()
      };
    })
  }
  
  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadTheLoai();
    }
  }
  searchTheLoai() {
    if (this.searchTen) {
      this.theloaiService.searchTheLoai(this.searchTen).subscribe(response => {
        this.theloais = response;
        this.totalPages = 1; // Vì kết quả tìm kiếm không phân trang
      });
    } else {
      this.loadTheLoai();
    }
  }

}
