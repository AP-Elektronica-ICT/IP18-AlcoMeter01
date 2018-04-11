import { Injectable } from '@angular/core';
import  firebase  from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthenticatieProvider {

userId: string;

  constructor(public angularfire: AngularFireAuth) {

  }

  LoginUser(email: string, password: string): Promise<any>{
    return this.angularfire.auth.signInWithEmailAndPassword(email, password);
  }

  CreateNewUser(email: string, password: string, country:String, dateOfBirth:Date): Promise<any> {
    return this.angularfire
    .auth.createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      firebase.database().ref('/userProfile').child(newUser.uid).set({ email: email, country:country, dateOfBirth:dateOfBirth})
      .catch(function(error){
        console.log("Error creating new user: ", error);
      });
    });
  }

  logOut(): Promise<any>{
    return this.angularfire.auth.signOut();
  }

  resetPassword(email: string): Promise<any>{
    return this.angularfire.auth.sendPasswordResetEmail(email);
  }

  getCurrentuserID(){
    
    this.angularfire.authState.subscribe(user => {
      if(user) this.userId = user.uid;
      else this.userId = null;
      console.log("userId in authProvider: ", this.userId);
    });
    return this.userId;
    }

   
  }

