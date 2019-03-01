import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectFilterPage } from './connect-filter';

@NgModule({
  declarations: [
    ConnectFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectFilterPage),
  ],
})
export class ConnectFilterPageModule {}
