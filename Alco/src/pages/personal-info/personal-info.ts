import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder, private fb: FirebaseProvider, private afAuth: AuthenticatieProvider) {
    this.changeAccountForm = formBuilder.group({
      email:[''],
      country:[''],
      dateOfBirth:['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInfoPage');
  }

changeUser(){
  this.fb.saveUserprofile(this.changeAccountForm.value.email, this.changeAccountForm.value.country, this.changeAccountForm.value.dateOfBirth);
}

logout(){
  this.afAuth.logOut();
  this.navCtrl.push('LoginPage');
}

}
