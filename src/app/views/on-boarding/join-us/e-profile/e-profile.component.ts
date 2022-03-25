import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-profile',
  templateUrl: './e-profile.component.html',
  styleUrls: ['./e-profile.component.scss']
})
export class EProfileComponent implements OnInit {
  slide_change: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:scroll")
  scrollfunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 3550 || document.documentElement.scrollTop > 3550) {
      this.slide_change = true;
    }
  }

}
