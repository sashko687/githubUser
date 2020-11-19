import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthStore } from './auth.store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private authStore: AuthStore,
  ) {}

  public githubSignin(): Observable<any> {
    const provider = new firebase.auth.GithubAuthProvider();
    return  from(firebase.auth().signInWithPopup(provider))
      .pipe(tap((data) => this.authStore.login(data.user.uid)))
  }

  public logout(): void {
    this.authStore.logout();
  }
}
