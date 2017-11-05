import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { SharedModule } from '@app/shared';

import { HomeComponent } from './components/home/home.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TipsComponent } from './components/tips/tips.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    HomeComponent,
    StatisticsComponent,
    TipsComponent
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
