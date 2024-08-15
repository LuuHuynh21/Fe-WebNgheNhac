import { Component, OnInit } from '@angular/core';
import { NguoiDung } from './nguoidung.model';
import { NguoidungService } from './nguoidung.service';

@Component({
  selector: 'app-nguoidung',
  templateUrl: './nguoidung.component.html',
  styleUrls: ['./nguoidung.component.css']
})
export class NguoidungComponent implements OnInit {

  nguoiDungs: NguoiDung[] = [];
  newNguoiDung: NguoiDung = {
    id: 0,
    ma: '',
    ten: '',
    email: '',
    matKhau: '',
    trangThai: true,
    ngaySinh: '',
    gioiTinh: '',
    ngayTao: new Date(),
    vaiTro: {
      id: 0,
      ten: ''
    }
  }

  constructor(private nguoiDungService: NguoidungService) { }

  ngOnInit(): void {
    this.loadNguoiDung();
  }
  loadNguoiDung() {
  this.nguoiDungService.getAll().subscribe(response => {
    this.nguoiDungs = response;
    console.log('Dữ liệu người dùng:', this.nguoiDungs);
  }, error => {
    console.error('Lỗi khi tải dữ liệu người dùng:', error);
  });
}

  addNguoiDung() {
    this.nguoiDungService.createND(this.newNguoiDung).subscribe((response: NguoiDung) => {
      this.nguoiDungs.push(response);
      this.newNguoiDung = {
        id: 0,
        ma: '',
        ten: '',
        email: '',
        matKhau: '',
        trangThai: true,
        ngaySinh: '',
        gioiTinh: '',
        ngayTao: new Date(),
        vaiTro: {
          id: 0,
          ten: ''
        }
      };
    })
  }
}
