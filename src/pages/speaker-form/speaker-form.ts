import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import { Speaker } from '../../state/speakers/speaker.model';

@IonicPage()
@Component({
  selector: 'page-speaker-form',
  templateUrl: 'speaker-form.html',
})
export class SpeakerFormPage {

  speaker: Speaker;
  form: FormGroup;

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private fb: FormBuilder
  ) { }

  ionViewWillLoad() {
    
    this.speaker = this.navParams.get('speaker') || {};

    this.form = this.fb.group({
      name: [this.speaker.name || '', Validators.required],
      id: [this.speaker.id || null],
      conferenceId: [this.speaker.conferenceId || null]
    });
  }

  submit() {
    if (this.form.valid) {
      this.dismiss(this.form.value);
    }
  }

  dismiss(newSpeaker: Speaker = null) {
    this.viewCtrl.dismiss({speaker: newSpeaker});
  }

}
