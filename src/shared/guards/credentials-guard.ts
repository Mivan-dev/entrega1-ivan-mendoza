import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../../app/core/auth/auth';
import { map } from 'rxjs/operators';
import { RoutesPaths } from '../routes';

export const credentialsGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return auth.loggedUser$.pipe(
    map(user => {
      if (!user) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  );
};

export const isAdminGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return auth.loggedUser$.pipe(
    map(user => {
      if (!user) {
        router.navigate([RoutesPaths.LOGIN]);
        return false;
      }
      
      if (user.role !== 'admin') {
        router.navigate([RoutesPaths.ALUMNOS]);
        // TODO: hacer vista de no autorizado, toast o simplemente el boton disable
        console.error('Acceso denegado - Se requiere rol de administrador');
        return false;
      }
      
      return true;
    })
  );
};