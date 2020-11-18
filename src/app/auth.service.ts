import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
private  provider = new firebase.auth.GithubAuthProvider();

  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  public githubSignin(): void {
    firebase
      .auth()
      .signInWithPopup(this.provider)

      .then((result) => {
        const token = result.credential.providerId;
        const user = result.user;

        console.log(token);
        console.log(user);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code);
        console.log(error.message);
      });
  }

  public Logout() {
    return this.afAuth.auth.signOut().then(() =>  {});
  }
}
