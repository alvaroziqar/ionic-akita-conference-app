import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap, switchMap } from 'rxjs/operators';

import { SpeakersStore } from './speakers.store';
import { SpeakersDataService } from './speakers-data.service';
import { Speaker } from './speaker.model';

@Injectable()
export class SpeakersService {


  constructor(
    private speakersStore: SpeakersStore,
    private speakersDataService: SpeakersDataService
  ) {}

  get(): Observable<Speaker[]> {
    const request = this.speakersDataService.get()
      .pipe(
        tap((response: any) => {
          this.speakersStore.setState((state) => {
            return {
              ...state,
              speakers: response
            }
          });
        })
      );
    return request;  
  }

  remove(speaker: Speaker): Observable<Speaker[]> {
    const request = this.speakersDataService.remove(speaker)
      .pipe(
        switchMap(() => {
          return this.get()
        })
      );
    return request;
  }

  update(speaker: Speaker): Observable<Speaker[]> {
    const request = this.speakersDataService.update(speaker)
      .pipe(
        switchMap(() => {
          return this.get()
        })
      );
    return request;
  }

  create(speaker: Speaker): Observable<Speaker[]> {
    const request = this.speakersDataService.create(speaker)
      .pipe(
        switchMap(() => {
          return this.get()
        })
      );
    return request;
  }
}