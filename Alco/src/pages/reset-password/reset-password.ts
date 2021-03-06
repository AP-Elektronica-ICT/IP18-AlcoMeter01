import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';


@IonicPage({name: 'page-reset-password'})
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  public resetPasswordForm: FormGroup;
  public loading: Loading;
  constructor(public navCtrl: NavController, 
            public navParams: NavParams, 
            public authProvider: AuthenticatieProvider, 
            public formBuilder: FormBuilder,
            public loadingCtrl: LoadingController,
            public alertCtrl: AlertController
          ) {
   
            this.resetPasswordForm = formBuilder.group({
              email:['']
            });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  resetPassword(){
      this.authProvider.resetPassword(this.resetPasswordForm.value.email).then(() => {
        const alert = this.alertCtrl.create({
          message: "email send",
          buttons: [{ text: 'Ok', role: 'cancel' }]
        });
        alert.present();
      }, (err) => {
        const alert = this.alertCtrl.create({
          message: err.message,
          buttons: [{ text: 'Ok', role: 'cancel' }]
        });
        alert.present();
      });

  }
  

}
