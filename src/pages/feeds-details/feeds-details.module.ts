import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedsDetailsPage } from './feeds-details';

@NgModule({
  declarations: [
    FeedsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedsDetailsPage),
  ],
})
export class FeedsDetailsPageModule {}
