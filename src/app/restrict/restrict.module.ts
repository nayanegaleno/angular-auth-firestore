import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrictComponent } from './restrict.component';



@NgModule({
  declarations: [
    RestrictComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RestrictComponent
  ]
})
export class RestrictModule { }
