import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

export interface IBill {

  id: string;
  date: Date;
  kwh: number;
  total: number;

}

export class Bill {

  col: AngularFirestoreCollection<IBill>;
  data: Observable<IBill[]>;

  constructor(private afs: AngularFirestore,
              auth: firebase.User) {
    this.col = afs.collection(`users/${auth.uid}/bills`);
    this.data = this.col.snapshotChanges()
      .map(actions => {
        return actions.map(action => {
          if (action.payload.doc.exists) {
            const data = action.payload.doc.data() as IBill;
            const id = action.payload.doc.id;
            return { id, ...data };
          }
          return null;
        });
      });
  }

  static set(afs: AngularFirestore, uid: string, data: IBill) {
    delete data.id;
    afs.collection(`users/${uid}/bills`).add(data);
  }

}
