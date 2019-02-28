import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-choose-interest',
  templateUrl: 'choose-interest.html',
})
export class ChooseInterestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseInterestPage');
  }

  goTabPage(){
  	this.navCtrl.push(TabsPage)
  }

}
