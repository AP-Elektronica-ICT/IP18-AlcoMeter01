import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { SimplyMeasurePage } from '../pages/simplyMeasure/simplyMeasure';
import { ResetPasswordPage } from "../pages/reset-password/reset-password";
import { MainPage} from "../pages/main/main";
import { SettingsPage } from "../pages/settings/settings";
import { StatisticsPage } from "../pages/statistics/statistics";
import { PersonalInfoPage } from "../pages/personal-info/personal-info";
import { FirebaseProvider } from "./../providers/firebase/firebase";
import { AuthenticatieProvider } from "./../providers/authenticatie/authenticatie";




const firebaseConfig = {
  apiKey: "AIzaSyCGbCzagTiX3RZmGXYct2YaJSZQPMcziac",
  authDomain: "alcometer-720c2.firebaseapp.com",
  databaseURL: "https://alcometer-720c2.firebaseio.com",
  projectId: "alcometer-720c2",
  storageBucket: "alcometer-720c2.appspot.com",
  messagingSenderId: "211742343446"
};


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public fb: FirebaseProvider, public Auth: AuthenticatieProvider) {

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'PersonalInfo', component: PersonalInfoPage },
      { title: 'Main', component: MainPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Statistics', component: StatisticsPage },
     

    ];

    
    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = LoginPage;
        unsubscribe();
      } else { 
        this.rootPage = MainPage;
        unsubscribe();
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.Auth.logOut();
    this.nav.setRoot(LoginPage);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
