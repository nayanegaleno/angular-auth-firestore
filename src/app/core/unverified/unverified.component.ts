import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-unverified',
  templateUrl: './unverified.component.html',
  styleUrls: ['./unverified.component.scss']
})
export class UnverifiedComponent implements OnInit {

  emailVerified = this.authService.isEmailVerified();
  currentEmail = this.authService.getCurrentEmail();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  newEmailVerification() {
    return this.authService.sendEmailVerification();
  }

}
