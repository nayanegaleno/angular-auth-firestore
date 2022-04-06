import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/homecomponent';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { RestrictModule } from '../restrict/restrict.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    AuthComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MemberComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RestrictModule,
    CoreRoutingModule
  ],
  exports: [
    AuthComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MemberComponent
  ],
  providers: [
    //MemberService
  ],schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class CoreModule { }
