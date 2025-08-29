import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LoggedUser, USERS_DATA } from '../../../shared/entities';
import { CommonModule } from '@angular/common';
import { RoutesPaths } from '../../../shared/routes';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.model';
import { login } from '../../ngrx/auth/auth.actions';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginForm! : FormGroup;
  user: LoggedUser | null = null;

  // variables de error
  usernameError: string = '';
  passwordError: string = '';

  constructor(
  private fb : FormBuilder,
  private router: Router,
  private store: Store<{ auth: AuthState }>
) {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
        Validators.pattern('^[a-zA-Z0-9._-]+$') // solo letras, números, puntos, guiones
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.updateErrors();
    });

  }

  // Manejo de Errores en form
  private updateErrors(): void {
    const usernameCtrl = this.loginForm.get('username');
    const passwordCtrl = this.loginForm.get('password');

    this.usernameError = this.getControlError(usernameCtrl);
    this.passwordError = this.getControlError(passwordCtrl);
  }

private getControlError(control: AbstractControl | null): string {
  if (!control) return '';
  if (control.invalid && (control.dirty || control.touched)) {
    if (control.hasError('required')) return 'Este campo es obligatorio';
    if (control.hasError('minlength')) return `Debe tener al menos ${control.getError('minlength').requiredLength} caracteres`;
    if (control.hasError('maxlength')) return `Debe tener como máximo ${control.getError('maxlength').requiredLength} caracteres`;
    if (control.hasError('pattern')) return 'Formato inválido (solo letras, números, ., _ y -)';
  }
  return '';
}

  onSubmit() {

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      // Validar credenciales
      const user = USERS_DATA.find(u => u.username === username && u.password === password);
      
      if (user) {
        // Dispatch login action
        this.store.dispatch(login({ username, password }));
        // Navegar a Alumnos
        this.router.navigate([RoutesPaths.ALUMNOS]);
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    }
  }
}
