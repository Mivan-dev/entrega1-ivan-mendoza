import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Auth } from '../../core/auth/auth';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginForm! : FormGroup;

  constructor(
  private fb : FormBuilder,
  private auth: Auth
) {
    this.loginForm = fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    // Lógica para manejar el envío del formulario
    if(this.loginForm.valid) {
      const {username, password} = this.loginForm.value;
      if(this.auth.logIn(username, password)) {
        console.log('Login exitoso');
      }
      else {
        console.log('Login fallido');
      }
  } 
}
}
