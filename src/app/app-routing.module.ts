import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { CoreComponent } from './core/core.component';
import { HomeComponent } from './home/home.component';
import { RestrictComponent } from './restrict/restrict.component';

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
    component: CoreComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'restrict',
        component: RestrictComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
