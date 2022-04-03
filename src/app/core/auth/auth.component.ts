import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  email = new FormControl('',[Validators.required, Validators.email]);
  senha = new FormControl('',Validators.required);
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    
  }

  /**
   * Evento de autenticação com E-mail e Senha
   */
  loginEmail (): void {
    this.router.navigate(['/home']);
  }

}
