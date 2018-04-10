import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { Observable } from 'rxjs/Observable';
import { Toast } from 'ionic-angular/components/toast/toast';

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

  saveUserprofile(email, country, dateOfBirth){
    var id = this.auth.getCurrentuserID();
    this.afd.database.ref(`/userProfile/${id}`).update({ email: email, country:country, dateOfBirth:dateOfBirth});
    var user = this.auth.angularfire.auth.currentUser;
    user.updateEmail(email).then(function(){
      user.sendEmailVerification().then(function(){
        //message of succes
        console.log("email changed succesfull");
      }).catch(function(error){
        console.log(error);
      });
    }).catch(function(error){
      console.log(error);
    });
    
    /*this.auth.angularfire.authState.subscribe(user => {
      if(user) {
        user.email = email;
        user.sendEmailVerification().then(function(){
          //message of succes
          console.log("email changed succesfull");
        }).catch(function(error){
          console.log(error);
        });
      }
      else {
          console.log("email not changed succesfully");
      }
    });*/
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
