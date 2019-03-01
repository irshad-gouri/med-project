import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ConnectFilterPage } from '../connect-filter/connect-filter';

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectPage');
  }

  public openModal(){
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('ConnectFilterPage',data);
    modalPage.present();
  }

}
