import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseProfilePage } from '../choose-profile/choose-profile';

@IonicPage()
@Component({
  selector: 'page-varification',
  templateUrl: 'varification.html',
})
export class VarificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VarificationPage');
  }

  public GoProfileUpdate(){
  	this.navCtrl.push(ChooseProfilePage)
  }

}
