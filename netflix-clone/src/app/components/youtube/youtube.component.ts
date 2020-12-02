import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
})
export class YoutubeComponent {
  @Input() id: string;

  status: boolean = true;

  playerVars = {
    cc_lang_pref: 'en',
    controls: 0,
    rel: 0,
    fs: 0,
    autoplay: 1,
    modestbranding: 1,
    showinfo: 0,
  };
  version = '...';
  private player;

  constructor() {}

  savePlayer(player) {
    this.player = player;
    this.player.playVideo();
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    if (this.status) this.player.playVideo();
    this.status = false;
  }
  onStateChange(event) {
    if (event.data === 0) {
      const video = document.getElementById('youtube__video');
      video.style.display = 'none';
      const header = document.querySelector('.header');
      header[0].style.background = 'transparent';
    }
  }
  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
