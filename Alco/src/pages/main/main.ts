import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private Noodnummer: CallNumber, public afAuth: AuthenticatieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }


  public buttonClicked: boolean = false; //Whatever you want to initialise it as

  public onButtonClick() {

      this.buttonClicked = !this.buttonClicked;
  }
  public Emergency() {
    this.Noodnummer.callNumber("0495142810", true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  
    }
  logout(){
    this.afAuth.logOut();
    this.navCtrl.push('LoginPage');
  }

}
