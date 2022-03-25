import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsFeedAnimation } from 'src/app/core/animation/on-boarding-animation/on-boarding.animation';
import { FragmentService } from 'src/app/core/service/fragment/fragment.service';

@Component({
  selector: 'app-c-newsfeed-discover',
  templateUrl: './c-newsfeed-discover.component.html',
  styleUrls: ['./c-newsfeed-discover.component.scss'],
  animations: [NewsFeedAnimation]
})
export class CNewsfeedDiscoverComponent implements OnInit {
  slide_change: boolean = false;
  ecosystemSubs: Subscription;
  ecosystemId: string = '';

  tokenId: string = '';
  default: string = 'previous';

  constructor(
    private fragmentService: FragmentService,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.ecosystemSubs = this.fragmentService.ecosystemFragment.subscribe(
      (value: string) => {
        this.ecosystemId = value;
        if (this.ecosystemId === 'ecosystem') {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(this.ecosystemId);
          }, 100);
        } else {
          return;
        }
      }
    );
  }

  @HostListener("document:scroll")
  scrollfunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
      this.slide_change = true;
    }
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
