import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RoleComponent } from './role/role.component';



@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    RoleComponent
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RestrictModule { }
