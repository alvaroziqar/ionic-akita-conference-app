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

  conferences$: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private conferencesService: ConferencesService,
    private conferencesQuery: ConferencesQuery
  ) {}

  ionViewWillLoad() {
    this.conferencesService.get().subscribe();

    this.conferences$ = this.conferencesQuery.select((state: any) => state.conferences);
  }

}
