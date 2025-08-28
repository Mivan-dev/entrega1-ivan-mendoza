import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../../ngrx/auth/auth.selectors';
import { RoutesPaths } from '../../../shared/routes';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found-path.html',
  styleUrl: './not-found-path.scss'
})
export class NotFoundPath implements OnInit {

  constructor(
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    // Redirigir después de 3 segundos
    setTimeout(() => {
      this.store.select(selectIsLoggedIn).subscribe(isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate([RoutesPaths.ALUMNOS]);
        } else {
          this.router.navigate([RoutesPaths.LOGIN]);
        }
      });
    }, 3000);
  }
}
