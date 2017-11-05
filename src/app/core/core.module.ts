import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './firebase.config';

import { MaterialModule } from '@app/material';

import { LoginDialogComponent } from './guards/optional-auth/login-dialog/login-dialog.component';

import { OptionalAuthGuard } from './guards/optional-auth/optional-auth.guard';

import { AuthService } from './services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    MaterialModule,
  ],
  declarations: [
    LoginDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [
    OptionalAuthGuard,
    AuthService
  ]
})
export class CoreModule { }
