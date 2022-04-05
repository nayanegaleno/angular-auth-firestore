import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { HomeComponent } from './core/home/homecomponent';
import { MemberComponent } from './member/member.component';
import { RoleComponent } from './restrict/role/role.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth', pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MemberComponent
      },
      {
        path: 'restrict',
        component: RoleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
