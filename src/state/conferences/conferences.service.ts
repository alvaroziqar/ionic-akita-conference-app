import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { ConferencesStore } from './conferences.store';
import { ConferencesDataService } from './conferences-data.service';
import { Conference } from './conference.model';

@Injectable()
export class ConferencesService {


  constructor(
    private conferencesStore: ConferencesStore,
    private conferencesDataService: ConferencesDataService
  ) {}

  get() {
    const request = this.conferencesDataService.get()
      .pipe(
        tap((response: any) => {
          console.log('hehehehe', response);
          const s = { conferences: response }
          this.conferencesStore.setState(state => {
            console.log('state', state);
            const newState = {...state, ...s}
            console.log('newState', newState);
            return newState;
          })
        })
      );
    return request;  
  }
}