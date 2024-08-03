import { Injectable } from '@angular/core';
import { BaiHat } from './baihat/baihat.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  currentSong: BaiHat | null = null;
  audioElement: HTMLAudioElement = new Audio();
  isPlaying: boolean = false;
  songList: BaiHat[] = [];
  currentIndex: number = -1;

  constructor(private http: HttpClient) {}

  playSong(baihat: BaiHat) {
    if (this.currentSong && this.currentSong.id === baihat.id) {
      if (this.isPlaying) {
        this.pauseSong();
      } else {
        this.resumeSong();
      }
    } else {
      this.stopSong();
      this.currentSong = baihat;
      this.audioElement.src = `${baihat.url}`;
      this.updateLuotNghe(baihat.id);
      this.audioElement.play();
      this.isPlaying = true;
      this.currentIndex = this.songList.indexOf(baihat);
    }
  }

  pauseSong() {
    this.audioElement.pause();
    this.isPlaying = false;
  }

  resumeSong() {
    this.audioElement.play();
    this.isPlaying = true;
  }

  stopSong() {
    if (this.currentSong) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
      this.isPlaying = false;
      this.currentSong = null;
      this.currentIndex = -1;
    }
  }
  nextSong() {
    if (this.songList.length > 0 && this.currentIndex >= 0) {
      const nextIndex = (this.currentIndex + 1) % this.songList.length;
      this.playSong(this.songList[nextIndex]);
    }
  }

  prevSong() {
    if (this.songList.length > 0 && this.currentIndex >= 0) {
      const prevIndex = (this.currentIndex - 1 + this.songList.length) % this.songList.length;
      this.playSong(this.songList[prevIndex]);
    }
  }
  updateLuotNghe(id: number) {
    this.http.put(`http://localhost:8080/api/bai-hat/luotnghe/${id}`, {}).subscribe(
      response => {
        console.log('Updated luot nghe successfully', response);
      },
      error => {
        console.error('Error updating luot nghe', error);
      }
    );
  }
}
