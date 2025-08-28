import { Component } from '@angular/core';
import { Boldtitle } from '../../../shared/directives/boldtitle';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { LoggedUser } from '../../../shared/entities';
import { selectIsLoggedIn, selectUser } from '../../ngrx/auth/auth.selectors';
import { RoutesPaths } from '../../../shared/routes';
import { logout } from '../../ngrx/auth/auth.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [Boldtitle, CommonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
  user$: Observable<LoggedUser | null>;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.user$ = this.store.select(selectUser);
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
  }

  onLogout() {
    this.store.dispatch(logout());
    this.router.navigate([RoutesPaths.LOGIN]);
  }
}