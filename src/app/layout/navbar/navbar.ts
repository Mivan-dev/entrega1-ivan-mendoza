import { Component, EventEmitter, Output } from '@angular/core';
import { Boldtitle } from '../../../shared/directives/boldtitle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { RoutesPaths } from '../../../shared/routes';
import { CommonModule } from '@angular/common';
import { combineLatestWith, filter, map, Observable, startWith } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../../ngrx/auth/auth.selectors';


@Component({
  selector: 'app-navbar',
  imports: [Boldtitle, NgbModule, RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Output() activeSection = new EventEmitter<string>();

  routesPaths = RoutesPaths;

  // Async pipe en template
  navbarDisplay$: Observable<string>;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store, private router: Router) {
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);

    const currentUrl$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => (e as NavigationEnd).urlAfterRedirects),
      startWith(this.router.url)
    );

    // TODO: buscar otra forma para no preguntar todo el tiempo si esta logueado de acuerdo a la ruta.
    this.navbarDisplay$ = this.isLoggedIn$.pipe(
      combineLatestWith(currentUrl$),
      map(([isLoggedIn, url]) =>
        isLoggedIn && !url.startsWith(`/${RoutesPaths.LOGIN}`) ? 'block' : 'none'
      )
    );
  }

  navigate(section: string) {
    this.activeSection.emit(section);
  }
}
