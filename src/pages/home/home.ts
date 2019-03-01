import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedsDetailsPage } from '../feeds-details/feeds-details';
import { ConnectPage } from '../connect/connect';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pet:string = 'trending';
  public buttonClicked: boolean = false;
  
  
  constructor(public navCtrl: NavController) {

  }

  public goFeedDetails(){
  this.navCtrl.push(FeedsDetailsPage)
  }

  public SubmitReport() {
    this.buttonClicked = !this.buttonClicked;
  }

  public goConnectPage(){
    this.navCtrl.push(ConnectPage)
  }
  

}