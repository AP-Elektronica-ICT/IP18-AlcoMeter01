import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

@Injectable()
export class FirebaseProvider {

  

  constructor(public afd: AngularFireDatabase, public auth: AuthenticatieProvider, public alert: AlertController) {}

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

  saveUserprofile(email, password, country, dateOfBirth){
    var id = this.auth.getCurrentuserID();
    this.afd.database.ref(`/userProfile/${id}`).update({ email: email, country:country, dateOfBirth:dateOfBirth});

    var user = this.auth.angularfire.auth.currentUser;

    user.updatePassword(password).then(function(){
      //toast message succesfull
      console.log("password changed sucesfully");
    }).catch(function(error){
      console.log(error);
    });


    if(email != user.email){
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
    }
  }

  getSettings(){
    var arr = [];
    var settings = {
      "country": String,
      "emergencyNumber": Date
    }
    var id = this.auth.getCurrentuserID();
    console.log("userId in firebaseProvider: ", id);
    this.afd.database.ref(`/settings/${id}/`).on('value', resp =>{
      arr = snapshotToArray(resp);
      settings.country=arr[0];
      settings.emergencyNumber=arr[1];
      console.log("settings in provider: ", settings);
    });
    return settings;
  }
 
  saveSettings(emergencyNumber, country) {
    this.afd.database.ref('/settings').child(this.auth.getCurrentuserID()).update({ emergencyNumber:emergencyNumber, country:country}).then(() => {
      console.log("settings saved");
    });
    
  }

  
  presentPrompt(changeUser) {
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
            var user = this.auth.angularfire.auth.currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(user.email, data.password);
            user.reauthenticateWithCredential(credential).then(() => {
              changeUser();
              console.log(data.password);
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

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    returnArr.push(item);
  });
  //console.log(returnArr);
  return returnArr;
}
