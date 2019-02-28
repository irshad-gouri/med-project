import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobDetailsPage } from '../job-details/job-details';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  applyTab: boolean = true;
  public SetUsers : any;
  
  constructor(public navCtrl: NavController) {
  	this.SetUsers = 'fulltime'
  }

  public SetuSer(users){
    this.SetUsers = users
  }

  public goJobDetailsPage(){
     this.navCtrl.push(JobDetailsPage)
  }

}
