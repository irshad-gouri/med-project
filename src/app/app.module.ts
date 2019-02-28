import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AnimatedHeaderComponentClass} from "../components/animated-header/animated-header.component";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { PhoneVarifyPage } from '../pages/phone-varify/phone-varify';
import { VarificationPage } from '../pages/varification/varification';
import { ChooseProfilePage } from '../pages/choose-profile/choose-profile';
import { ChooseInterestPage } from '../pages/choose-interest/choose-interest';
import { JobDetailsPage } from '../pages/job-details/job-details';
import { FeedsDetailsPage } from '../pages/feeds-details/feeds-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AnimatedHeaderComponentClass,
    SigninPage,
    SignupPage,
    PhoneVarifyPage,
    VarificationPage,
    ChooseProfilePage,
    ChooseInterestPage,
    AboutPage,
    JobDetailsPage,
    ContactPage,
    HomePage,
    FeedsDetailsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    SignupPage,
    PhoneVarifyPage,
    VarificationPage,
    ChooseProfilePage,
    ChooseInterestPage,
    AboutPage,
    JobDetailsPage,
    ContactPage,
    HomePage,
    FeedsDetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
