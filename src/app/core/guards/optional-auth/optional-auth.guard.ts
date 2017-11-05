import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth/auth.service';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Injectable()
export class OptionalAuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private dialog: MatDialog) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.authState
      .map(user => {
        const loggedIn = !!user;
        if (loggedIn) {
          return true;
        } else {
          this.dialog.open(LoginDialogComponent);
          return true;
        }
      })
  }
}
