import { Routes } from '@angular/router';
import { Alumnos } from './feature/alumnos/alumnos';
import { Cursos } from './feature/cursos/cursos';
import { Inscripciones } from './feature/inscripciones/inscripciones';
import { RoutesPaths } from '../shared/routes';
import { Login } from './feature/login/login';
import { credentialsGuard, isAdminGuard } from '../shared/guards/credentials-guard';
import { NotFoundPath } from './feature/not-found-path/not-found-path';

export const routes: Routes = [
    {
        path: '',
        redirectTo: RoutesPaths.LOGIN,
        pathMatch: 'full'
    },
    {
        path: RoutesPaths.LOGIN,
        component: Login
    },
    {
        path: RoutesPaths.ALUMNOS,
        loadComponent: () => import('./feature/alumnos/alumnos').then(m => m.Alumnos),
        canActivate: [credentialsGuard]
    },
    {
        path: RoutesPaths.VER_ALUMNO,
        loadComponent: () => import('./feature/alumnos/ver-alumno/ver-alumno').then(m => m.VerAlumno),
        canActivate: [credentialsGuard]
    },
    {
        path: RoutesPaths.EDITAR_ALUMNO + '/:id',
        loadComponent: () => import('./feature/alumnos/editar-alumno/editar-alumno').then(m => m.EditarAlumno),
        canActivate: [credentialsGuard, isAdminGuard] 
    },
    {
        path: RoutesPaths.CURSOS,
        loadComponent: () => import('./feature/cursos/cursos').then(m => m.Cursos),
        canActivate: [credentialsGuard]
    },
    {
        path: RoutesPaths.VER_CURSO,
        loadComponent: () => import('./feature/cursos/ver-curso/ver-curso').then(m => m.VerCurso),
        canActivate: [credentialsGuard]
    },
    {
        path: RoutesPaths.EDITAR_CURSO + '/:id',
        loadComponent: () => import('./feature/cursos/editar-curso/editar-curso').then(m => m.EditarCurso),
        canActivate: [credentialsGuard, isAdminGuard]
    },
    {
        path: RoutesPaths.INSCRIPCIONES,
        loadComponent: () => import('./feature/inscripciones/inscripciones').then(m => m.Inscripciones),
        canActivate: [credentialsGuard]
    },
     {
        path: RoutesPaths.NOT_FOUND_PATH,
        component: NotFoundPath
    },
    {
        path: '**',
        component: NotFoundPath
    }
];
