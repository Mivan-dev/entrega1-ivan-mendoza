import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { LoggedUser } from '../../../shared/entities';
import { selectIsLoggedIn, selectUser } from '../../ngrx/auth/auth.selectors';
import { RoutesPaths } from '../../../shared/routes';
import { logout } from '../../ngrx/auth/auth.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
  
  user$: Observable<LoggedUser | null>;
  isLoggedIn$: Observable<boolean>;

  //Usando Async pipe
  userInfoDisplay$: Observable<string>;
  adminBadgeDisplay$: Observable<string>;
  welcomeText$: Observable<string>;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.user$ = this.store.select(selectUser);
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);

    // Mostrar/ocultar contenedor de usuario
    this.userInfoDisplay$ = this.isLoggedIn$.pipe(
      map(is => (is ? 'flex' : 'none'))
    );

    this.welcomeText$ = this.user$.pipe(
      map(u => (u ? `Bienvenido, ${u.username}` : ''))
    );

    // Mostrar/ocultar admin
    this.adminBadgeDisplay$ = this.user$.pipe(
      map(u => (u?.role === 'admin' ? 'inline-block' : 'none'))
    );
  }

  onLogout() {
    this.store.dispatch(logout());
    this.router.navigate([RoutesPaths.LOGIN]);
  }
}