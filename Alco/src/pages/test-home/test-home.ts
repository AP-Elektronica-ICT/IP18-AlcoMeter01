import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(private afAuth: AuthenticatieProvider, public navCtrl: NavController, public navParams: NavParams, private fb: FirebaseProvider) {
  }

  logout(){
    this.afAuth.logOut();
    this.navCtrl.push('LoginPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestHomePage');
    console.log("profile in homepage: ", this.fb.getUserProfile());

   }


}
