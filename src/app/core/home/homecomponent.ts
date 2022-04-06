import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  emailVerified = this.authService.isEmailVerified();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
