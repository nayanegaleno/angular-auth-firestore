import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './core/auth/auth.component';
import { RoleComponent } from './restrict/role/role.component';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo, emailVerified} from '@angular/fire/auth-guard';
import { MemberComponent } from './core/member/member.component';
import { HomeComponent } from './core/home/homecomponent';
import { UnverifiedComponent } from './core/unverified/unverified.component';
import { ProfileComponent } from './core/profile/profile.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const onlyVerifieds = () => emailVerified;


const routes: Routes = [
  { 
    path: '', 
    component: AuthComponent, 
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
        {
          path: '',
          component: MemberComponent
        },
        {
          path: 'profile',
          component: ProfileComponent
        },
        {
          path: 'restrict',
          component: UnverifiedComponent,
          children: [
            {
              path: 'verified',
              component: RoleComponent,
              canActivate: [AuthGuard],
              data: {authGuardPipe: onlyVerifieds}
            }
          ]
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
