import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseProvider {

  

  constructor(public afd: AngularFireDatabase, public auth: AuthenticatieProvider) {}
  getUserProfile() {
    var arr = [];
    var profile = {
      "country": String,
      "dateOfBirth": Date,
      "email": String
    }
    var id = this.auth.getCurrentuserID();
    console.log("userId in firebaseProvider: ", id);
    this.afd.database.ref(`/userProfile/${id}/`).on('value', resp =>{
      arr = snapshotToArray(resp);
      profile.country=arr[0];
      profile.dateOfBirth=arr[1];
      profile.email=arr[2];
      console.log("profile in provider: ", profile);
    });
    return profile;
  }


 
  saveSettings(emergencyNumber, country) {
    //this.afd.list('/settings/').push([emergencyNumber, country]);
    this.afd.database.ref('/settings').child(this.auth.getCurrentuserID()).update({ emergencyNumber:emergencyNumber, country:country})

  }
 
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
