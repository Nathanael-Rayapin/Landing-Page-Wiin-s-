import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FragmentService } from 'src/app/core/service/fragment/fragment.service';

@Component({
  selector: 'app-g-team',
  templateUrl: './g-team.component.html',
  styleUrls: ['./g-team.component.scss']
})
export class GTeamComponent implements OnInit, OnDestroy {
  slide_change: boolean = false;
  teamSubs: Subscription;
  teamId: string = '';

  constructor(
    private fragmentService: FragmentService,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.teamSubs = this.fragmentService.teamFragment.subscribe(
      (value: string) => {
        this.teamId = value;
        if (this.teamId === 'team') {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(this.teamId);
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
    if (document.body.scrollTop > 5000 || document.documentElement.scrollTop > 5000) {
      this.slide_change = true;
    }
  }

  ngOnDestroy(): void {
    this.teamSubs.unsubscribe();
  }

}
