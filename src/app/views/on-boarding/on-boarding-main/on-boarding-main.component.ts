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

  defaultLang: string = 'En';
  btnLanguages: btnLanguages[] = [
    { language: 'Français' },
    { language: 'English' },
    { language: 'Deutsch' },
    { language: '日本語' },
    { language: '한국어' },
    { language: 'Português' },
    { language: 'ਪੰਜਾਬੀ' },
    { language: 'русский' },
    { language: 'Español' }
  ]

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }

  goToGitHub(): Window | null {
    return window.open('https://github.com/etsraphael/WiinsWebDapp', '_blank');
  }

  // The Default value not apear on the Dropdown
  onOpenLang() {
    const abbr = this.defaultLang;
    const filteredLang = this.btnLanguages.filter(x => !x.language.startsWith(abbr));
    return this.btnLanguages = filteredLang;;
  }

  // This method does nothing but change the text
  onChangeLang(item: string) {
    if (this.defaultLang === item) {
      return;
    }
    this.defaultLang = item;
  }
}

export interface btnRoutes {
  name: string;
  path: string;
}

export interface btnTabs {
  name: string;
}

export interface btnLanguages {
  language: string;
}


