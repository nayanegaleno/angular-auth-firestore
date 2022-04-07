import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unverified',
  templateUrl: './unverified.component.html',
  styleUrls: ['./unverified.component.scss']
})
export class UnverifiedComponent implements OnInit {

  isEmailVerified = this.authService.isEmailVerified();
  currentEmail = this.authService.getCurrentEmail();

  constructor(public authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(error: string) {
    this._snackBar.open(error, 'x', {
      duration: 4000,
      horizontalPosition: 'left',
      verticalPosition: 'top'
    });
  }

  newEmailVerification() {
    this.authService.sendEmailVerification()
    .then(() => this.router.navigate(['home']))
    .catch((e) => this.openSnackBar('New authentication link sent'));
  }

  backHome() {
    this.router.navigate(['home']);
  }

}
