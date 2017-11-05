import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

export interface IUser {

  id: string;
  providers: firebase.UserInfo[];

}

export class User {

  doc: AngularFirestoreDocument<IUser>;
  data: Observable<IUser>;

  constructor(private afs: AngularFirestore,
              auth: firebase.User) {
    this.doc = afs.doc(`users/${auth.uid}`);
    this.data = this.doc.snapshotChanges()
      .map(action => {
        if (action.payload.exists) {
          const data = action.payload.data() as IUser;
          const id = action.payload.id;
          return { id, ...data };
        }
        return null;
      });
  }

  static set(afs: AngularFirestore, id: string, data: IUser) {
    delete data.id;
    afs.doc(`users/${id}`).set(data);
  }

  static update(afs: AngularFirestore, id: string, data: Partial<IUser>) {
    delete data.id;
    afs.doc(`users/${id}`).update(data);
  }

}
