import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AboutUsDialogComponent } from './about-us-dialog/about-us-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAboutUsDialog() {
    this.dialog.open(AboutUsDialogComponent);
  }

}
