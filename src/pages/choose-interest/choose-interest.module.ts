import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseInterestPage } from './choose-interest';

@NgModule({
  declarations: [
    ChooseInterestPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseInterestPage),
  ],
})
export class ChooseInterestPageModule {}
