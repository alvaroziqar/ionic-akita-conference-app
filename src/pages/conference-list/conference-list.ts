import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { ConferencesQuery } from './../../state/conferences/conferences.query';
import { ConferencesService } from './../../state/conferences/conferences.service';
import { Conference } from '../../state/conferences/conference.model';

@IonicPage()
@Component({
  selector: 'page-conference-list',
  templateUrl: 'conference-list.html',
})
export class ConferenceListPage {

  conferences$: Observable<Conference[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private conferencesService: ConferencesService,
    private conferencesQuery: ConferencesQuery
  ) {}

  ionViewWillLoad() {
    this.conferences$ = this.conferencesQuery.select((state: any) => state.conferences);

    // Init Dataflow
    this.conferencesService.get().subscribe();
  }

  goToDetail(conference: Conference) {
    this.navCtrl.push('ConferenceDetailPage', {conference: conference});
  }

}
