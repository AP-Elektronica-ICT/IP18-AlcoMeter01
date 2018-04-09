import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase, public auth: AuthenticatieProvider) {}
  getUserProfile() {
    var id = this.auth.getCurrentuserID();
    console.log("userId in firebaseProvider: ", id);
    return this.afd.object(`userProfile/${id}/country/`);
  }
 
  addUser(email) {
    this.afd.list('/userProfile/').push(email);
  }
 
  removeUser(email) {
    this.afd.list('/userProfile/').remove(email);


  }

}
