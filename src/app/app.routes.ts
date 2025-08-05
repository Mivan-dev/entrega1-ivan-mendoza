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
        path: RoutesPaths.VER_ALUMNO,
        loadComponent: () => import('./feature/alumnos/ver-alumno/ver-alumno').then(m => m.VerAlumno)
    },
    {
        path: RoutesPaths.EDITAR_ALUMNO + '/:dni',
        loadComponent: () => import('./feature/alumnos/editar-alumno/editar-alumno').then(m => m.EditarAlumno)
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
