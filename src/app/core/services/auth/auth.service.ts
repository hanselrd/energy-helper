import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

import { IUser, User } from '../../models/user';

@Injectable()
export class AuthService {

  authState: Observable<firebase.User>;
  user: User;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.authState = afAuth.authState;
    this.authState.subscribe(auth => {
      if (auth) {
        this.user = new User(afs, auth);
      }
    });
  }

  googleLogIn() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
      .then(auth => {
        let user = new User(this.afs, auth.user);
        user.data.subscribe(data => {
          if (data) {
            data.providers = JSON.parse(JSON.stringify(auth.user.providerData));
            User.update(this.afs, auth.user.uid, data);
          } else {
            data = {} as IUser;
            data.providers = JSON.parse(JSON.stringify(auth.user.providerData));
            User.set(this.afs, auth.user.uid, data);
          }
        });
      });
  }

  facebookLogIn() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
      .then(auth => {
        let user = new User(this.afs, auth.user);
        user.data.subscribe(data => {
          if (data) {
            data.providers = JSON.parse(JSON.stringify(auth.user.providerData));
            User.update(this.afs, auth.user.uid, data);
          } else {
            data = {} as IUser;
            data.providers = JSON.parse(JSON.stringify(auth.user.providerData));
            User.set(this.afs, auth.user.uid, data);
          }
        });
      });
  }

  logOut() {
    return this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['home']));
  }

}
