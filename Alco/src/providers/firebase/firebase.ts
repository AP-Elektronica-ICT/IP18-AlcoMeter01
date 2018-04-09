import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseProvider {

  

  constructor(public afd: AngularFireDatabase, public auth: AuthenticatieProvider) {}
  getUserProfile() {
    var profile = [];
    var id = this.auth.getCurrentuserID();
    console.log("userId in firebaseProvider: ", id);
    this.afd.database.ref(`/userProfile/${id}/`).on('value', resp =>{
      profile = snapshotToArray(resp);
      console.log("profile in provider: ", profile);
    });
    return profile;
  }


 
  /*addUser(newUser, email, country, dateOfBirth) {
    //this.afd.list('/userProfile/').push(email);
    this.afd.database.ref('/userProfile').child(newUser.uid).set({ email: email, country:country, dateOfBirth:dateOfBirth})

  }*/
 
  removeUser(email) {
    this.afd.list('/userProfile/').remove(email);


  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    returnArr.push(item);
  });
  //console.log(returnArr);
  return returnArr;
}
