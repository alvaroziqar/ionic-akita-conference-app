import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';

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
          const s = { conferences: response }
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
}