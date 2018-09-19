import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
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
    private speakersQuery: SpeakersQuery,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
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

  removeSpeaker(speaker: Speaker) {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.speakersService.remove(speaker).subscribe();
          }
        }
      ]
    });

    alert.present();
  }

  updateSpeaker(speaker: Speaker) {
    let modal = this.modalCtrl.create('SpeakerFormPage', { speaker: speaker });
    
    modal.onWillDismiss((data) => {
      if (data && data.speaker) {
        this.speakersService.update(data.speaker).subscribe();
      }
    });

    modal.present();
  }
  
  createSpeaker() { 
    let modal = this.modalCtrl.create('SpeakerFormPage', { speaker: null });
    
    modal.onWillDismiss((data) => {
      if (data && data.speaker) {
        data.speaker.conferenceId = this.conference.id;
        this.speakersService.create(data.speaker).subscribe();
      }
    });

    modal.present();
  }

}
