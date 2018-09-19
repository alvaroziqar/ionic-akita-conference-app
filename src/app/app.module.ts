import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { ConferencesService } from './../state/conferences/conferences.service';
import { ConferencesQuery } from './../state/conferences/conferences.query';
import { ConferencesDataService } from './../state/conferences/conferences-data.service';
import { ConferencesStore } from './../state/conferences/conferences.store';

import { SpeakersService } from './../state/speakers/speakers.service';
import { SpeakersQuery } from './../state/speakers/speakers.query';
import { SpeakersDataService } from './../state/speakers/speakers-data.service';
import { SpeakersStore } from './../state/speakers/speakers.store';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConferencesService,
    ConferencesQuery,
    ConferencesDataService,
    ConferencesStore,
    SpeakersService,
    SpeakersQuery,
    SpeakersDataService,
    SpeakersStore, 
  ]
})
export class AppModule {}
