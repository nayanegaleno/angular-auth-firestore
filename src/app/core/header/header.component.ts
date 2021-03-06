import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  emailVerified = this.authService.isEmailVerified();

  constructor(private readonly authService: AuthService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  async logOut() {
    await this.authService.logOut()
    .then(() => this.router.navigate(['']))
    .catch((e) => console.log(e.message));
  }
  
}
