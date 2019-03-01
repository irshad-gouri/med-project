import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';

/**
 * Generated class for the ConnectFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect-filter',
  templateUrl: 'connect-filter.html',
})
export class ConnectFilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectFilterPage');
  }

  

}
