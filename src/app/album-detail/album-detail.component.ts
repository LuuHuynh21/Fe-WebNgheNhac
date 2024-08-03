import { Component, OnInit } from '@angular/core';
import { Album } from '../album/album.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album/album.service';
import { NghesiService } from '../nghesi/nghesi.service';
import { NgheSi } from '../nghesi/nghesi.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album | null = null;
  ngheSis: NgheSi[] = [];
  id: number = 0;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private ngheSiService: NghesiService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getDetail(this.id);
    this.loadNgheSi();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  navigateToHome(): void {
    this.router.navigate(['/album']);
  }

  getDetail(id: number) {
    this.albumService.getByID(id).subscribe(response => {
      this.album = response;
    });
  }

  loadNgheSi() {
    this.ngheSiService.getAll().subscribe(response => {
      this.ngheSis = response;
    });
  }

  updateAlbum() {
    if (this.album) {
      if (this.selectedFile) {
        this.albumService.updateAB(this.album.id, this.album, this.selectedFile).subscribe((response: Album) => {
          this.router.navigate(['/album']);  // Redirect to main page after successful update
        });
      } else {
        this.albumService.updateAB(this.album.id, this.album).subscribe((response: Album) => {
          this.router.navigate(['/album']);  // Redirect to main page after successful update
        });
      }
    }
  }
}
