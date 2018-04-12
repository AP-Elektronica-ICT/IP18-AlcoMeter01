import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { TestHomePage } from '../test-home/test-home';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: 'page-create-account'})
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  public createAccountForm: FormGroup;
  public loading: Loading;
  constructor(public navCtrl: NavController, 
            public navParams: NavParams, 
            public authProvider: AuthenticatieProvider, 
            public formBuilder: FormBuilder,
            public loadingCtrl: LoadingController,
            public alertCtrl: AlertController
          ) {
            this.createAccountForm = formBuilder.group({
              email:['', Validators.compose([Validators.required, Validators.email])],
              password:['', Validators.compose([Validators.required, Validators.minLength(6)])],
              confirmPassword:['',Validators.compose([Validators.required, matchOtherValidator('password')])],
              country:['', Validators.compose([Validators.required])],
              dateOfBirth:['', Validators.compose([Validators.required])],
              agree:[false, Validators.requiredTrue]
            });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  async signUpUser(){
    if(!this.createAccountForm.valid){
      const alert = this.alertCtrl.create({
        message: "Form not valid",
        buttons: [{ text: 'Ok', role: 'cancel' }]
      });
      alert.present();
    }
    else{
      const loading: Loading = this.loadingCtrl.create();
      loading.present();
      try{
        await this.authProvider.CreateNewUser(this.createAccountForm.value.email, this.createAccountForm.value.password, this.createAccountForm.value.country, this.createAccountForm.value.dateOfBirth)
        .then(()=>{
          loading.dismiss();
          this.navCtrl.setRoot(TestHomePage);
        });
      } catch(error){
          const alert = this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }]
        });
        alert.present();
      }
      
  
    }
  }


}

export function matchOtherValidator(otherControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
      const otherControl: AbstractControl = control.root.get(otherControlName);

      if (otherControl) {
          const subscription: Subscription = otherControl
              .valueChanges
              .subscribe(() => {
                  control.updateValueAndValidity();
                  subscription.unsubscribe();
              });
      }

      return (otherControl && control.value !== otherControl.value) ? {match: true} : null;
  };
}