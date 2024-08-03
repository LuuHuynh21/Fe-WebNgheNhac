import { Component, OnInit } from '@angular/core';
import { BaiHat } from '../baihat/baihat.model';
import { NgheSi } from '../nghesi/nghesi.model';
import { Album } from '../album/album.model';
import { TheLoai } from '../theloai/theloai.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album/album.service';
import { NghesiService } from '../nghesi/nghesi.service';
import { TheloaiService } from '../theloai/theloai.service';
import { BaihatService } from '../baihat/baihat.service';

@Component({
  selector: 'app-bai-hat-detail',
  templateUrl: './bai-hat-detail.component.html',
  styleUrls: ['./bai-hat-detail.component.css']
})
export class BaiHatDetailComponent implements OnInit {
  baiHat: BaiHat | null = null;
  ngheSis: NgheSi[] = [];
  albums: Album[]= [];
  theLoais: TheLoai[] = [];
  id: number = 0;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private ngheSiService: NghesiService,
    private theLoaiService: TheloaiService,
    private baiHatService: BaihatService,
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getDetail(this.id);
    this.loadNgheSi();
    this.loadAlbum();
    this.loadTheLoai();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  navigateToHome(): void {
    this.router.navigate(['/baihat']);
  }

  getDetail(id: number) {
    this.baiHatService.getByID(id).subscribe(response => {
      this.baiHat = response;
    });
  }

  loadNgheSi() {
    this.ngheSiService.getAll().subscribe(response => {
      this.ngheSis = response;
    });
  }
  loadAlbum() {
    this.albumService.getAll().subscribe(response => {
      this.albums = response;
    });
  }
  loadTheLoai() {
    this.theLoaiService.getAll().subscribe(response => {
      this.theLoais = response;
    });
  }
  updateBaiHat() {
    if (this.baiHat) {
      if (this.selectedFile) {
        this.baiHatService.updateBH(this.baiHat.id, this.baiHat, this.selectedFile).subscribe((response: BaiHat) => {
          this.router.navigate(['/baihat']);  // Redirect to main page after successful update
        });
      }
    }
  }
}
