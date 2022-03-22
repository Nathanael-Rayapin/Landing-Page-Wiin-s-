import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';
@Component({
  selector: 'app-on-boarding-main',
  templateUrl: './on-boarding-main.component.html',
  styleUrls: ['./on-boarding-main.component.scss'],
})
export class OnBoardingMainComponent implements OnInit {
  btnRoutes: btnRoutes[] = [
    { name: 'Github', path: '' }
  ];

  btnTabs: btnTabs[] = [
    { name: 'Ecosystem' },
    { name: 'Token ZION' },
    { name: 'Team' },
    { name: 'Contact' }
  ]

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }

  goToGitHub(): Window | null {
    return window.open('https://github.com/etsraphael/WiinsWebDapp', '_blank');
  }
}

export interface btnRoutes {
  name: string;
  path: string;
}

export interface btnTabs {
  name: string;
}


