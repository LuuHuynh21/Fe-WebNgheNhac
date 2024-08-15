import { Component, OnInit } from '@angular/core';
import { NguoiDung } from '../nguoidung/nguoidung.model';
import { VaiTro } from '../vaitro/vaitro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NguoidungService } from '../nguoidung/nguoidung.service';

@Component({
  selector: 'app-nguoidungdetail',
  templateUrl: './nguoidungdetail.component.html',
  styleUrls: ['./nguoidungdetail.component.css']
})
export class NguoidungdetailComponent implements OnInit{
  nguoiDung: NguoiDung | null = null;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nguoidungService: NguoidungService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getDetail(this.id);
  }

  navigateToHome(): void {
    this.router.navigate(['/nguoidung']);
  }

  getDetail(id: number): void {
    this.nguoidungService.getByID(id).subscribe(response => {
      this.nguoiDung = response;
    });
  }

  updateNguoiDung() {
    if (this.nguoiDung) {
      this.nguoidungService.updateND(+this.nguoiDung.id, this.nguoiDung).subscribe((response: NguoiDung) => {
        this.router.navigate(['/nguoidung']);  // Chuyển về trang chính sau khi cập nhật thành công
      });
    }
  }
}
