import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Toolbar } from './layout/toolbar/toolbar';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from "./layout/footer/footer";
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthState, selectIsLoggedIn } from './ngrx/auth/auth.selectors';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Toolbar, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  
  isLoggedIn$: Observable<boolean>;
  private authSub?: Subscription;

  constructor(private store: Store) {
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
  }

  ngOnInit(): void {
    this.authSub = this.store.select(selectAuthState).subscribe(auth => {
      try {
        localStorage.setItem('auth', JSON.stringify(auth));
      } catch {
        // No es necesario manejar error de almacenamiento local
      }
    });
  }

  ngOnDestroy(): void {
    this.authSub?.unsubscribe();
  }

}
