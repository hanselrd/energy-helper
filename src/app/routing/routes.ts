import { Routes } from '@angular/router';

import { OptionalAuthGuard } from '@app/core';

import { HomeComponent } from './components/home/home.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TipsComponent } from './components/tips/tips.component';

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
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [OptionalAuthGuard]
  },
  {
    path: 'tips',
    component: TipsComponent
  }
];
