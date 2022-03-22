import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnBoardingMainComponent } from './views/on-boarding/on-boarding-main/on-boarding-main.component';
import { JoinUsComponent } from './views/on-boarding/join-us/join-us.component';
import { ContactUsComponent } from './views/on-boarding/contact-us/contact-us.component';
import { HomeComponent } from './views/home/home.component';
import { MainSearchBarComponent } from './core/component/main-search-bar/main-search-bar.component';
import { MainNavBarComponent } from './core/component/main-nav-bar/main-nav-bar.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreModule } from './core/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { ALetsBuildComponent } from './views/on-boarding/join-us/a-lets-build/a-lets-build.component';
import { BImagineEarlyAccessComponent } from './views/on-boarding/join-us/b-imagine-early-access/b-imagine-early-access.component';
import { CNewsfeedDiscoverComponent } from './views/on-boarding/join-us/c-newsfeed-discover/c-newsfeed-discover.component';
import { DMessengerComponent } from './views/on-boarding/join-us/d-messenger/d-messenger.component';
import { EProfileComponent } from './views/on-boarding/join-us/e-profile/e-profile.component';
import { FMusicVideoComponent } from './views/on-boarding/join-us/f-music-video/f-music-video.component';
import { GTeamComponent } from './views/on-boarding/join-us/g-team/g-team.component';
import { HZionComponent } from './views/on-boarding/join-us/h-zion/h-zion.component';
import { IWhitePaperComponent } from './views/on-boarding/join-us/i-white-paper/i-white-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    OnBoardingMainComponent,
    JoinUsComponent,
    ContactUsComponent,
    HomeComponent,
    MainSearchBarComponent,
    MainNavBarComponent,
    ALetsBuildComponent,
    BImagineEarlyAccessComponent,
    CNewsfeedDiscoverComponent,
    DMessengerComponent,
    EProfileComponent,
    FMusicVideoComponent,
    GTeamComponent,
    HZionComponent,
    IWhitePaperComponent
  ],
  imports: [
    RootStoreModule,
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
