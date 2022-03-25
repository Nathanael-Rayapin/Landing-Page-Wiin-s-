import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FragmentService } from 'src/app/core/service/fragment/fragment.service';

@Component({
  selector: 'app-j-contact',
  templateUrl: './j-contact.component.html',
  styleUrls: ['./j-contact.component.scss']
})
export class JContactComponent implements OnInit, OnDestroy {
  slide_change: boolean = false;
  contactSubs: Subscription;
  contactId: string = '';

  constructor(
    private fragmentService: FragmentService,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.contactSubs = this.fragmentService.contactFragment.subscribe(
      (value: string) => {
        this.contactId = value;
        if (this.contactId === 'contact') {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(this.contactId);
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
    if (document.body.scrollTop > 8200 || document.documentElement.scrollTop > 8200) {
      this.slide_change = true;
    }
  }

  ngOnDestroy(): void {
    this.contactSubs.unsubscribe();
  }

}
