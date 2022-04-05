import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component'

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { MemberService } from './member.service';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    MemberComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  exports: [
    MemberComponent
  ],
  providers: 
  [
    MemberService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MemberModule { }
