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

  get(): Observable<Conference[]> {
    const request = this.conferencesDataService.get()
      .pipe(
        tap((response: any) => {
          this.conferencesStore.setState((state) => {
            return {
              ...state,
              conferences: response
            }
          });
        })
      );
    return request;  
  }
}
