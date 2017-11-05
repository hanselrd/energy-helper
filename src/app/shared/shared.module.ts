import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/material';

import { AboutUsDialogComponent } from './components/footer/about-us-dialog/about-us-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    AboutUsDialogComponent,
    FooterComponent,
    HeaderComponent,
    PageComponent,
    SidenavComponent
  ],
  entryComponents: [
    AboutUsDialogComponent
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    FooterComponent,
    HeaderComponent,
    PageComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
