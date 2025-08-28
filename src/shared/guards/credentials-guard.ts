import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { RoutesPaths } from '../routes';
import { selectIsLoggedIn, selectIsAdmin } from '../../app/ngrx/auth/auth.selectors';

export const credentialsGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

   return store.select(selectIsLoggedIn).pipe(
    take(1),
    map(isLoggedIn => {
      if (!isLoggedIn) {
        router.navigate([RoutesPaths.LOGIN]);
        return false;
      }
      return true;
    })
  );
};

export const isAdminGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectIsAdmin).pipe(
    take(1),
    map(isAdmin => {
      if (!isAdmin) {
        router.navigate([RoutesPaths.ALUMNOS]);
        return false;
      }
      return true;
    })
  );
};