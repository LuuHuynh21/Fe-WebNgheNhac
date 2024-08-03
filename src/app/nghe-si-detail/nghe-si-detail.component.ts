import { Component, OnInit } from '@angular/core';
import { NgheSi } from '../nghesi/nghesi.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NghesiService } from '../nghesi/nghesi.service';

@Component({
  selector: 'app-nghe-si-detail',
  templateUrl: './nghe-si-detail.component.html',
  styleUrls: ['./nghe-si-detail.component.css']
})
export class NgheSiDetailComponent implements OnInit {
  ngheSi: NgheSi | null = null;
  id: number = 0;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ngheSiService: NghesiService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getDetail(this.id);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  navigateToHome(): void {
    this.router.navigate(['/nghesi']);
  }

  getDetail(id: number) {
    this.ngheSiService.getByID(id).subscribe(response => {
      this.ngheSi = response;
    });
  }

  updateNgheSi() {
    if (this.ngheSi && this.selectedFile) {
      this.ngheSiService.updateTL(+this.ngheSi.id, this.ngheSi, this.selectedFile).subscribe((response: NgheSi) => {
        this.router.navigate(['/nghesi']);  // Chuyển về trang chính sau khi cập nhật thành công
      });
    }
  }
}
