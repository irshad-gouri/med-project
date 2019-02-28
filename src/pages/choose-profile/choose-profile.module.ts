import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseProfilePage } from './choose-profile';

@NgModule({
  declarations: [
    ChooseProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseProfilePage),
  ],
})
export class ChooseProfilePageModule {}
