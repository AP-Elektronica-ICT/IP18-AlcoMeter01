import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  constructor(private alert: AlertController, public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, private fb: FirebaseProvider, private afAuth: AuthenticatieProvider) {
    this.changeAccountForm = formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword:['', Validators.compose([Validators.required, matchOtherValidator('password')])],
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

  changeUser(){
    this.fb.saveUserprofile(this.changeAccountForm.value.email, this.changeAccountForm.value.password, this.changeAccountForm.value.country, this.changeAccountForm.value.dateOfBirth);
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
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            var user = this.afAuth.angularfire.auth.currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(user.email, data.password);
            user.reauthenticateWithCredential(credential).then(() => {
              this.changeUser();
            }).catch(error => {
              console.log("authentication failure");
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
