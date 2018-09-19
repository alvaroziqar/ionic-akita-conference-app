import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Conference } from './conference.model';

export interface ConferencesState {
  conferences: Conference[];
}

export function createInitialState(): ConferencesState {
  return {
    conferences: []
  }
}

@Injectable()
@StoreConfig({ name: 'conferences' })
export class ConferencesStore extends Store<Conference> {
  constructor() {
    super(createInitialState());
  }
}