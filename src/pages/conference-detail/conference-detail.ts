import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { SpeakersQuery } from './../../state/speakers/speakers.query';
import { SpeakersService } from './../../state/speakers/speakers.service';
import { Speaker } from '../../state/speakers/speaker.model';
import { Conference } from '../../state/conferences/conference.model';

@IonicPage()
@Component({
  selector: 'page-conference-detail',
  templateUrl: 'conference-detail.html',
})
export class ConferenceDetailPage {

  conference: Conference;
  speakers$: Observable<Speaker[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private speakersService: SpeakersService,
    private speakersQuery: SpeakersQuery
  ) {}

  ionViewWillLoad() {
    this.conference = this.navParams.get('conference');

    this.speakers$ = this.speakersQuery.select((state: any) => state.speakers)
      .map((speakers: Speaker[]) => {
        return speakers.filter((speaker: Speaker) => speaker.conferenceId == this.conference.id)
      });

    // Init dataflow
    this.speakersService.get().subscribe();
  }

}
