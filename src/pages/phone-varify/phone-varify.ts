import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VarificationPage } from '../varification/varification';

@IonicPage()
@Component({
  selector: 'page-phone-varify',
  templateUrl: 'phone-varify.html',
})
export class PhoneVarifyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneVarifyPage');
  }

  public GoVarification(){
  	this.navCtrl.push(VarificationPage)
  }

}
