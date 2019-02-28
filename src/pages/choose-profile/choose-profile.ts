import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseInterestPage } from '../choose-interest/choose-interest';

@IonicPage()
@Component({
  selector: 'page-choose-profile',
  templateUrl: 'choose-profile.html',
})
export class ChooseProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseProfilePage');
  }

  public GoChooseInterest(){
  	this.navCtrl.push(ChooseInterestPage)
  }

}
