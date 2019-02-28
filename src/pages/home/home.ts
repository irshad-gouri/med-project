import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedsDetailsPage } from '../feeds-details/feeds-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet:string = 'trending';
  
  constructor(public navCtrl: NavController) {

  }

  public goFeedDetails(){
  this.navCtrl.push(FeedsDetailsPage)
  }

}
