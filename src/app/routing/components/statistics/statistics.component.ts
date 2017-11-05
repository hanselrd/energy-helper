import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AuthService, IBill, Bill, User } from '@app/core';

import { AddEntryDialogComponent } from './add-entry-dialog/add-entry-dialog.component';

export class BillsDataSource extends DataSource<any> {

  bills: Bill;
  auth: firebase.User;
  data: Observable<IBill[]>;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    super();
    this.authService.authState
      .subscribe(auth => {
        this.auth = auth;
        this.bills = new Bill(this.afs, auth);
        this.data = this.bills.data;
      });
  }

  connect(): Observable<IBill[]> {
    return this.data;
  }

  disconnect() { }

}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  dataSource: BillsDataSource;
  displayedColumns = ['date', 'kwh', 'total'];

  constructor(private afs: AngularFirestore,
              public authService: AuthService,
              private dialog: MatDialog) {
    this.dataSource = new BillsDataSource(this.afs, this.authService);
  }

  ngOnInit() {
  }

  openAddEntryDialog() {
    let dialogRef = this.dialog.open(AddEntryDialogComponent);
    dialogRef.afterClosed()
      .subscribe((result: IBill) => {
        Bill.set(this.afs, this.dataSource.auth.uid, result);
      });
  }

}
