import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Conference } from './conference.model';

@Injectable()
export class ConferencesDataService {

  endpoint = 'http://5b9204a24c818e001456e89f.mockapi.io/conferences';

  constructor(
    private http: HttpClient,
  ) {}

  get(): Observable<Conference[]> {
    return this.http.get<Conference[]>(this.endpoint);
  }
}