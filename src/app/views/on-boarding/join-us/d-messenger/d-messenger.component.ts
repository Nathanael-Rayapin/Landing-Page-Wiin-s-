import { Component, OnInit } from '@angular/core';
import { MessengerAnimation } from 'src/app/core/animation/on-boarding-animation/on-boarding.animation';

@Component({
  selector: 'app-d-messenger',
  templateUrl: './d-messenger.component.html',
  styleUrls: ['./d-messenger.component.scss'],
  animations: [MessengerAnimation]
})
export class DMessengerComponent implements OnInit {
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
