import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { SharedModule } from '@app/shared';

import { AddEntryDialogComponent } from './components/statistics/add-entry-dialog/add-entry-dialog.component';
import { AssistComponent } from './components/assist/assist.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TipsComponent } from './components/tips/tips.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    AddEntryDialogComponent,
    AssistComponent,
    HomeComponent,
    NotFoundComponent,
    StatisticsComponent,
    TipsComponent
  ],
  entryComponents: [
    AddEntryDialogComponent
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
