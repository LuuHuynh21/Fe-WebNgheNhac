import { Component,OnInit } from '@angular/core';
import { BaiHat } from '../baihat/baihat.model';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album/album.service';
import { BaihatService } from '../baihat/baihat.service';
import { Album } from '../album/album.model';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.css']
})
export class ViewAlbumComponent implements OnInit {
  baiHats: BaiHat[] = [];
  album: Album | null = null;

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private musicService: MusicService) {}

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    if (albumId) {
      this.loadSongsByAlbumId(+albumId);
    }
  }

  loadSongsByAlbumId(id: number) {
    this.albumService.getAlbumById(id).subscribe(response => {
      this.baiHats = response;
      this.musicService.songList = this.baiHats;
      console.log(this.baiHats);
    });
  }
  playSong(baihat: BaiHat) {
    this.musicService.playSong(baihat);
    console.log('Playing song:', baihat);
  }
  togglePlayPause(baihat: BaiHat) {
    this.musicService.playSong(baihat);
  }

  isPlaying(baihat: BaiHat): boolean {
    return this.musicService.currentSong?.id === baihat.id && this.musicService.isPlaying;
  }
}
