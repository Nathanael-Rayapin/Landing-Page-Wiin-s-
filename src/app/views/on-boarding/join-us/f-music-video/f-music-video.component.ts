import { Component, HostListener, OnInit } from '@angular/core';
import { MusicVideoAnimation } from 'src/app/core/animation/on-boarding-animation/on-boarding.animation';

@Component({
  selector: 'app-f-music-video',
  templateUrl: './f-music-video.component.html',
  styleUrls: ['./f-music-video.component.scss'],
  animations: [MusicVideoAnimation]
})
export class FMusicVideoComponent implements OnInit {
  slide_change: boolean = false;
  default: string = 'default';
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:scroll")
  scrollfunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 4400 || document.documentElement.scrollTop > 4400) {
      this.slide_change = true;
    }
  }

  onPrevious() {
    if (this.count === 0) {
      return;
    }
    if (this.count === 1) {
      this.count--
      this.default = 'default';
    } else if (this.count === 2) {
      this.count--
      this.default = 'step-1';
    } else {
      this.count--
      this.default = 'step-2';
    }
  }

  onNext() {
    if (this.count === 3) {
      return;
    }
    if (this.count === 0) {
      this.count++
      this.default = 'step-1';
    } else if (this.count === 1) {
      this.count++
      this.default = 'step-2';
    } else {
      this.count++
      this.default = 'final-step';
    }
  }

}
