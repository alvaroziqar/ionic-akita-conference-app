import { ConferencesStore } from './conferences.store';
import { Conference } from './conference.model';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable()
export class ConferencesQuery extends Query<Conference> {
  constructor(protected store: ConferencesStore) {
    super(store);
  }
}