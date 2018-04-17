import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import firebase from 'firebase';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {

  changeAccountForm: FormGroup;
  constructor(private loadingCtrl: LoadingController, private alert: AlertController, public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, private fb: FirebaseProvider, private afAuth: AuthenticatieProvider) {
    this.changeAccountForm = formBuilder.group({
      email:['', Validators.compose([ Validators.email])],
      password:['', Validators.compose([Validators.minLength(6)])],
      confirmPassword:['', Validators.compose([matchOtherValidator('password')])],
      country:[''],
      dateOfBirth:['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInfoPage');
  }

  logout(){
    this.afAuth.logOut();
    this.navCtrl.push('LoginPage');
  }

  async changeUser(loading: Loading){
    try {
      await this.fb.saveUserprofile(this.changeAccountForm.value.email, this.changeAccountForm.value.password, this.changeAccountForm.value.country, this.changeAccountForm.value.dateOfBirth);
      loading.dismiss();
      const alert = this.alert.create({
        message: "Changes saved succesfully",
        buttons: [{ text: 'Ok', role: 'cancel' }]
      });
      alert.present();
    }catch(error){
      loading.dismiss();
      const alert = this.alert.create({
        message: error.message,
        buttons: [{ text: 'Ok', role: 'cancel' }]
      });
      alert.present();
    }    
  }

  presentPrompt() {
    let alert = this.alert.create({
      title: 'Confirm Changes',
      inputs: [
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          //console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            const loading: Loading = this.loadingCtrl.create();
            loading.present();

            var user = this.afAuth.angularfire.auth.currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(user.email, data.password);
            user.reauthenticateWithCredential(credential).then(() => {
              this.changeUser(loading);

            }).catch(error => {
              //console.log("authentication failure");
              loading.dismiss();
              const alert = this.alert.create({
                message: error.message,
                buttons: [{ text: 'Ok', role: 'cancel' }]
              });
              alert.present();
            })
          }
        }
      ]
    });
    alert.present();
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
