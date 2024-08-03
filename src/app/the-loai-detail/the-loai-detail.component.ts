import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TheloaiService } from '../theloai/theloai.service';
import { TheLoai } from '../theloai/theloai.model';

@Component({
  selector: 'app-the-loai-detail',
  templateUrl: './the-loai-detail.component.html',
  styleUrls: ['./the-loai-detail.component.css']
})
export class TheLoaiDetailComponent implements OnInit {
  theLoai: TheLoai | null = null;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private theloaiService: TheloaiService
  ) { }
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getDetail(this.id);
  }
  navigateToHome(): void {
    this.router.navigate(['/theloai']); // Use the injected Router service to navigate to the home page
  }

  getDetail(id: number) {
    this.theloaiService.getByID(id).subscribe(response => {
      this.theLoai = response;
    });
  }

  updateTheLoai() {
    if (this.theLoai) {
      this.theloaiService.updateTL(+this.theLoai.id, this.theLoai).subscribe((response: TheLoai) => {
        this.router.navigate(['/theloai']);  // Chuyển về trang chính sau khi cập nhật thành công
      });
    }
  }

}
