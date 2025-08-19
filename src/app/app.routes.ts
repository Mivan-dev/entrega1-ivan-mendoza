import { Routes } from '@angular/router';
import { Alumnos } from './feature/alumnos/alumnos';
import { Cursos } from './feature/cursos/cursos';
import { Inscripciones } from './feature/inscripciones/inscripciones';
import { RoutesPaths } from '../shared/routes';
import { Login } from './feature/login/login';

export const routes: Routes = [
    {
        path: RoutesPaths.LOGIN,
        component: Login
    },
    {
        path: RoutesPaths.ALUMNOS,
        component: Alumnos
    },
    {
        path: RoutesPaths.VER_ALUMNO,
        loadComponent: () => import('./feature/alumnos/ver-alumno/ver-alumno').then(m => m.VerAlumno)
    },
    {
        path: RoutesPaths.EDITAR_ALUMNO + '/:id',
        loadComponent: () => import('./feature/alumnos/editar-alumno/editar-alumno').then(m => m.EditarAlumno)
    },
    {
        path: RoutesPaths.CURSOS,
        loadComponent: () => import('./feature/cursos/cursos').then(m => m.Cursos)
    },
    {
        path: RoutesPaths.VER_CURSO,
        loadComponent: () => import('./feature/cursos/ver-curso/ver-curso').then(m => m.VerCurso)
    },
    {
        path: RoutesPaths.EDITAR_CURSO + '/:id',
        loadComponent: () => import('./feature/cursos/editar-curso/editar-curso').then(m => m.EditarCurso)
    },
    {
        path: RoutesPaths.INSCRIPCIONES,
        loadComponent: () => import('./feature/inscripciones/inscripciones').then(m => m.Inscripciones)
    },
    {
        path: '**',
        component: Alumnos
    }
];
