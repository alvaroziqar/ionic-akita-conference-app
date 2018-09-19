import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Speaker } from './speaker.model';

export interface SpeakersState {
  speakers: Speaker[];
}

export function createInitialState(): SpeakersState {
  return {
    speakers: []
  }
}

@Injectable()
@StoreConfig({ name: 'speakers' })
export class SpeakersStore extends Store<Speaker> {
  
  constructor() {
    super(createInitialState());
  }

}
