import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakerFormPage } from './speaker-form';

@NgModule({
  declarations: [
    SpeakerFormPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeakerFormPage),
  ],
})
export class SpeakerFormPageModule {}
