import { SpeakersStore } from './speakers.store';
import { Speaker } from './speaker.model';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable()
export class SpeakersQuery extends Query<Speaker> {
  
  constructor(protected store: SpeakersStore) {
    super(store);
  }

}
