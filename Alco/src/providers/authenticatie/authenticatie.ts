import { Injectable } from '@angular/core';
import  firebase  from 'firebase';

@Injectable()
export class AuthenticatieProvider {

  constructor() {

  }

  LoginUser(email: string, password: string): Promise<any>{
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  CreateNewUser(email: string, password: string, country:String, dateOfBirth:Date): Promise<any> {
    return firebase
    .auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      firebase.database().ref('/userProfile').child(newUser.uid).set({ email: email, country:country, dateOfBirth:dateOfBirth})
      .catch(function(error){
        console.log("Error creating new user: ", error);
      });
    });
  }

  logOut(): Promise<any>{
    return firebase.auth().signOut();
  }

  resetPassword(email: string): Promise<any>{
    return firebase.auth().sendPasswordResetEmail(email);
  }

  getCurrentuserID(): any{
    var id;
    return firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('userID: ' + user.uid);
         return id = user.uid;
      } else {
        console.log("no user logged in");
        return id = null;
      }
    });
    }

    /*admin.auth().getUser(uid)
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully fetched user data:", userRecord.toJSON());
    })
    .catch(function(error) {
      console.log("Error fetching user data:", error);
    });*/

  }

