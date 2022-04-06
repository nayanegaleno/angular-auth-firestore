import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/homecomponent';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { RestrictModule } from '../restrict/restrict.module';

import { MemberComponent } from './member/member.component';
import { AuthService } from './auth/services/auth.service';
import { FirestoreService } from './services/firestore.service';
import { AppRoutingModule } from '../app-routing.module';
import { UnverifiedComponent } from './unverified/unverified.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AuthComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MemberComponent,
    UnverifiedComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    RestrictModule,
    AppRoutingModule
  ],
  exports: [
    AuthComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MemberComponent,
    UnverifiedComponent
  ],providers: [ 
    AuthService,
    FirestoreService
  ]
})
export class CoreModule { }
