import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  email = this.authService.getCurrentEmail();
  emailVerificado = this.authService.isEmailVerified();
  displayName = this.authService.getUserName() as string;

  constructor(
    private fb: FormBuilder, 
    private readonly authService: AuthService,
    private readonly router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  updateUser() {
    return this.authService.updateName(this.displayName);
  }

}
