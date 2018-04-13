import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { BluetoothProvider } from '../../providers/bluetooth/bluetooth';

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

  public meting: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AuthenticatieProvider, public bt: BluetoothProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }


  public buttonClicked: boolean = false; //Whatever you want to initialise it as

  public onButtonClick() {

      this.buttonClicked = !this.buttonClicked;
  }

  logout(){
    this.afAuth.logOut();
    this.navCtrl.push('LoginPage');
  }

  receiveData(){
    this.bt.receiveData();
    this.meting = this.bt.meting;
  }
}
