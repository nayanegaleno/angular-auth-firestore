import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

 
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  
  constructor(
    private fb: FormBuilder, 
    private readonly authService: AuthService,
    private readonly router: Router,
    private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  openSnackBar(error: string) {
    this._snackBar.open(error, 'x', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
  
  login() {
    this.authService.loginEmail(this.form.value.email, this.form.value.password)
    .then(() => this.router.navigate(['home']))
    .catch((e) => this.openSnackBar('User or password incorrect!'));
    
  }

  createAccount() {
    this.authService.createEmailAccount(this.form.value.email, this.form.value.password)
    .then(() => this.emailVerification())
    .catch((e) => this.openSnackBar('Email already in use!'));
  }

  loginGoogle() {
    this.authService.loginGoogle().then(() => this.router.navigate(['home']))
    .catch((e) => this.openSnackBar(e.message));
  }

  emailVerification() {
    this.authService.sendEmailVerification().then(() => this.router.navigate(['home']))
    .catch((e) => console.log(e.message));
  }
}
