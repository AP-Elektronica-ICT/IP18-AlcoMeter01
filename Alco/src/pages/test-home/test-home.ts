import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticatieProvider} from '../../providers/authenticatie/authenticatie'
import { FirebaseProvider} from '../../providers/firebase/firebase'


/**
 * Generated class for the TestHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-home',
  templateUrl: 'test-home.html',
})
export class TestHomePage {

    public settingsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private afAuth: AuthenticatieProvider, public navCtrl: NavController, public navParams: NavParams, private fb: FirebaseProvider) {
    this.settingsForm = formBuilder.group({
      emergencyNumber:[''],
      country:['']
    });
    
  }

  logout(){
    this.afAuth.logOut();
    this.navCtrl.push('LoginPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestHomePage');
    console.log("profile in homepage: ", this.fb.getUserProfile());

   }

   save(){
     this.fb.saveSettings(this.settingsForm.value.emergencyNumber, this.settingsForm.value.country);
   }
}
