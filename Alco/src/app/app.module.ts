import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from "angularfire2/auth";
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { AuthenticatieProvider } from '../providers/authenticatie/authenticatie';
import { TestHomePage } from '../pages/test-home/test-home';
import { TestHomePageModule } from '../pages/test-home/test-home.module';
import * as firebase from 'firebase';
import { ResetPasswordPageModule } from '../pages/reset-password/reset-password.module';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { MainPage} from "../pages/main/main";
import { SettingsPage } from "../pages/settings/settings";
import { StatisticsPage } from "../pages/statistics/statistics";
import { PersonalInfoPage } from "../pages/personal-info/personal-info";
import { MainPageModule } from '../pages/main/main.module';

const firebaseConfig = {
  apiKey: "AIzaSyCGbCzagTiX3RZmGXYct2YaJSZQPMcziac",
  authDomain: "alcometer-720c2.firebaseapp.com",
  databaseURL: "https://alcometer-720c2.firebaseio.com",
  projectId: "alcometer-720c2",
  storageBucket: "alcometer-720c2.appspot.com",
  messagingSenderId: "211742343446"
};

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    MyApp,
    CreateAccountPage,
    SettingsPage,
    StatisticsPage,
    PersonalInfoPage
      ],

  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    LoginPageModule,
    HttpModule,
    AngularFireDatabaseModule,
    TestHomePageModule,
    ResetPasswordPageModule,
    MainPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TestHomePage,
    CreateAccountPage,
    ResetPasswordPage,
    MainPage,
    SettingsPage,
    StatisticsPage,
    PersonalInfoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticatieProvider,
    FirebaseProvider

  ]
})
export class AppModule {}
