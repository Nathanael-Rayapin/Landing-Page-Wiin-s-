import { Component, OnInit } from '@angular/core';
import { NewsFeedAnimation } from 'src/app/core/animation/on-boarding-animation/on-boarding.animation';

@Component({
  selector: 'app-c-newsfeed-discover',
  templateUrl: './c-newsfeed-discover.component.html',
  styleUrls: ['./c-newsfeed-discover.component.scss'],
  animations: [NewsFeedAnimation]
})
export class CNewsfeedDiscoverComponent implements OnInit {
  default: string = 'previous';
  constructor() { }

  ngOnInit(): void {
  }

  onPrevious() {
    if (this.default === 'next') {
      this.default = 'previous';
    }
  }

  onNext() {
    if (this.default === 'previous') {
      this.default = 'next';
    }
  }

}
