import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
//import { AlertController } from 'ionic-angular';
import { AuthenticatieProvider } from '../../providers/authenticatie/authenticatie';
//import { Observable } from 'rxjs/Observable';
//import firebase from 'firebase';

@Injectable()
export class FirebaseProvider {

  

  constructor(public afd: AngularFireDatabase, public auth: AuthenticatieProvider) {}

  //user profile
  async getUserProfile() {
    var arr = [];
    var profile = {
      "country": String,
      "dateOfBirth": Date,
      "email": String
    }
    await this.auth.getCurrentuserID().then(id => {
      console.log("userId in firebaseProvider: ", id);
    this.afd.database.ref(`/userProfile/${id}/`).on('value', resp =>{
      arr = snapshotToArray(resp);
      profile.country=arr[0];
      profile.dateOfBirth=arr[1];
      profile.email=arr[2];
      console.log("profile in provider: ", profile);
      
      });
    });
    return profile;
  }

  async saveUserprofile(email, password, country, dateOfBirth){
    this.auth.getCurrentuserID().then(id => {
      this.afd.database.ref(`/userProfile/${id}`).update({ email: email, country:country, dateOfBirth:dateOfBirth});
    });

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

  //app settings
  async getSettings(){
    var arr = [];
    var settings = {
      "country": String,
      "emergencyNumber":String
    }
    
    await this.auth.getCurrentuserID().then( id => {
      console.log("userId in firebaseProvider: ", id);

      this.afd.database.ref(`/settings/${id}/`).on('value', resp =>{
        arr = snapshotToArray(resp);
        settings.country=arr[0];
        settings.emergencyNumber=arr[1];
        console.log("settings in provider: ", settings);
      });
    });
    return settings;
  }
 
  saveSettings(emergencyNumber, country) {
    this.auth.getCurrentuserID().then(id => {
      this.afd.database.ref(`/settings/${id}/`).update({ emergencyNumber:emergencyNumber, country:country}).then(() => {
        console.log("settings saved");
      });
    });  
  }

  //measurement
  saveMeasurement(resultaat){
    var data = {
      "promille":Number,
      "beschrijving":String
    }
    data.promille = resultaat[0];
    data.beschrijving = resultaat[1];
    this.auth.getCurrentuserID().then(id => {
      this.afd.database.ref(`/meting/${id}/`).push(data);
    });  
  }

  async getMeasurements(){
    var arr = [];
    await this.auth.getCurrentuserID().then(id => {
      this.afd.database.ref(`/meting/${id}/`).on('value', resp => {
        arr = snapshotToArray(resp);
        console.log("metingen in provider: ", arr);
      });  
    });
    return arr;
   }
}

//get data from datatbase
export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    returnArr.push(item);
  });
  console.log(returnArr);
  return returnArr;
}
