import { Routes } from '@angular/router';

import { OptionalAuthGuard } from '@app/core';

import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [OptionalAuthGuard]
  }
];
