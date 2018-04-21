import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController, MenuController } from 'ionic-angular';
import { User } from '../../models/user';
import {CreateAccountPage } from './../create-account/create-account';
import {ResetPasswordPage} from './../reset-password/reset-password';
import { MainPage } from '../main/main';
import { SimplyMeasurePage } from '../simplyMeasure/simplyMeasure';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private loadingCtrl: LoadingController, private afAuth: AuthenticatieProvider, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'menu');
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  async login(user: User){
    const loading: Loading = this.loadingCtrl.create();
    loading.present();
   try {
    await this.afAuth.LoginUser(user.email, user.password).then(() => {
      loading.dismiss();
      this.navCtrl.push(MainPage);
    });
  }catch(error){
    loading.dismiss();
    const alert = this.alertCtrl.create({
      message: error.message,
      buttons: [{ text: 'Ok', role: 'cancel' }]
    });
    alert.present();
    }
  }

  createAccount(){
    this.navCtrl.push(CreateAccountPage);
  }

  resetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }

  simplyMeasure(){
    this.navCtrl.push(SimplyMeasurePage);
    this.menuCtrl.enable(false, 'menu');
  }

}
