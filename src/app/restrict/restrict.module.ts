import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role/role.component';


@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    RoleComponent
  ]
})
export class RestrictModule {
}
