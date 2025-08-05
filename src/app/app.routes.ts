import { Routes } from '@angular/router';
import { Alumnos } from './feature/alumnos/alumnos';
import { Cursos } from './feature/cursos/cursos';
import { Inscripciones } from './feature/inscripciones/inscripciones';
import { RoutesPaths } from '../shared/routes';

export const routes: Routes = [
    {
        path: '',
        component: Alumnos
    },
    {
        path: RoutesPaths.ALUMNOS,
        component: Alumnos
    },
    {
        path: RoutesPaths.CURSOS,
        loadComponent: () => import('./feature/cursos/cursos').then(m => m.Cursos)
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
