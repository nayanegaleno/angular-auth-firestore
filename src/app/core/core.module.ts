import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
