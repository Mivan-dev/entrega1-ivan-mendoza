import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
//import { Auth } from '../../core/auth/auth';
import { LoggedUser, USERS_DATA } from '../../../shared/entities';
import { CommonModule, JsonPipe } from '@angular/common';
import { RoutesPaths } from '../../../shared/routes';
import { Store } from '@ngrx/store';
import { AuthState } from '../../ngrx/auth/auth.model';
import { login } from '../../ngrx/auth/auth.actions';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginForm! : FormGroup;
  user: LoggedUser | null = null;

  constructor(
  private fb : FormBuilder,
  //private auth: Auth,
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
  }

  // ngOnInit() {
  //   this.auth.loggedUser$.subscribe(user => {
  //     this.user = user;
  //     if (user) {
  //       console.log('Usuario logueado:', user);
  //     } else {
  //       console.log('Usuario no logueado');
  //     }
  //   });
  // }

  // Métodos para manejar errores de forma limpia
  hasError(field: string, errorType: string): boolean {
    return this.loginForm.get(field)?.hasError(errorType) && 
           this.loginForm.get(field)?.touched || false;
  }

  isFieldInvalid(field: string): boolean {
    return this.loginForm.get(field)?.invalid && 
           this.loginForm.get(field)?.touched || false;
  }

  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);
    
    // EL BOTON PERMANECERA DISABLE
    // if (control?.hasError('required')) {
    //   return field === 'username' ? 'El usuario es requerido' : 'La contraseña es requerida';
    // }
    
    if (control?.hasError('minlength')) {
      const requiredLength = control.errors?.['minlength'].requiredLength;
      return `Mínimo ${requiredLength} caracteres`;
    }
    
    if (control?.hasError('maxlength')) {
      const requiredLength = control.errors?.['maxlength'].requiredLength;
      return `Máximo ${requiredLength} caracteres`;
    }
    
    if (control?.hasError('pattern')) {
      return 'Solo se permiten letras, números y los caracteres ._-';
    }
    
    return '';
  }

  onSubmit() {
    // Lógica para manejar el envío del formulario
    // const {username, password} = this.loginForm.value;
    // console.log(this.loginForm.value);
    // this.store.dispatch(login({ username, password }));

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      // Validar credenciales
      const user = USERS_DATA.find(u => u.username === username && u.password === password);
      
      if (user) {
        // Dispatch login action
        this.store.dispatch(login({ username, password }));
        
        console.log(`Login exitoso - Usuario: ${user.username} - Es admin: ${user.role === 'admin'}`);
        
        // Navegar a Alumnos
        this.router.navigate([RoutesPaths.ALUMNOS]);
      } else {
        console.log('Credenciales incorrectas');
        alert('Usuario o contraseña incorrectos');
      }
    }
  }




  //   if(this.loginForm.valid) {
  //     const {username, password} = this.loginForm.value;
  //     if(this.auth.logIn(username, password)) {
  //       console.log('Login exitoso');
  //       this.router.navigate([RoutesPaths.ALUMNOS]);
  //     }
  //     else {
  //       console.log('Login fallido');
  //     }
  // } 
// }
}
