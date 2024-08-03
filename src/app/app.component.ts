import { Component } from '@angular/core';
import { MusicService } from './music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'WebNgheNhac';
  currentTime: string = '00:00';
  totalDuration: string = '00:00';
  seekValue: number = 0;
  volumeValue: number = 99;

  constructor(public musicService: MusicService) {}

  ngOnInit() {
    this.musicService.audioElement.addEventListener('timeupdate', () => {
      this.updateTime();
    });

    this.musicService.audioElement.addEventListener('loadedmetadata', () => {
      this.totalDuration = this.formatTime(this.musicService.audioElement.duration);
    });

    this.musicService.audioElement.volume = this.volumeValue / 100;
  }

  togglePlayPause() {
    if (this.musicService.isPlaying) {
      this.musicService.pauseSong();
    } else {
      this.musicService.resumeSong();
    }
  }

  updateTime() {
    this.currentTime = this.formatTime(this.musicService.audioElement.currentTime);
    this.seekValue = (this.musicService.audioElement.currentTime / this.musicService.audioElement.duration) * 100;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  seekTo(event: any) {
    const seekTo = (event.target.value / 100) * this.musicService.audioElement.duration;
    this.musicService.audioElement.currentTime = seekTo;
  }

  setVolume(event: any) {
    this.volumeValue = event.target.value;
    this.musicService.audioElement.volume = this.volumeValue / 100;
  }

  stopSong() {
    this.musicService.stopSong();
  }
}
