import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Speaker } from './speaker.model';

@Injectable()
export class SpeakersDataService {

  endpoint = 'http://5b9204a24c818e001456e89f.mockapi.io/speakers';

  constructor(
    private http: HttpClient,
  ) {}

  get(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(this.endpoint);
  }
}