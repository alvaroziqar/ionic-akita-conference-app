import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConferenceListPage } from './conference-list';

@NgModule({
  declarations: [
    ConferenceListPage,
  ],
  imports: [
    IonicPageModule.forChild(ConferenceListPage),
  ],
})
export class ConferenceListPageModule {}
