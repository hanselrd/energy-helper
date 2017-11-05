import { Routes } from '@angular/router';

import { OptionalAuthGuard } from '@app/core';

import { AssistComponent } from './components/assist/assist.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TipsComponent } from './components/tips/tips.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'assist',
    component: AssistComponent,
    canActivate: [OptionalAuthGuard] // required
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [OptionalAuthGuard]
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [OptionalAuthGuard] // required
  },
  {
    path: 'tips',
    component: TipsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
