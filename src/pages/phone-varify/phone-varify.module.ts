import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneVarifyPage } from './phone-varify';

@NgModule({
  declarations: [
    PhoneVarifyPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneVarifyPage),
  ],
})
export class PhoneVarifyPageModule {}
