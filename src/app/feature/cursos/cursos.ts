import { Component } from '@angular/core';
import { Course } from '../../../shared/entities';
import { CursosAPI} from './cursos-api';
import { switchMap } from 'rxjs';
import { CommonModule, JsonPipe } from '@angular/common';
import { CursoTabla } from './curso-tabla/curso-tabla';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule, JsonPipe, CursoTabla],
  templateUrl: './cursos.html',
  styleUrl: './cursos.scss'
})
export class Cursos {
  cursos!: Course[]
    constructor(private cursosApi: CursosAPI) { } 
  
    ngOnInit() {
      this.cursosApi.getCursos().subscribe(cursos => {
        this.cursos = cursos;
      });
    }
  
    deleteCourse(course: Course) {
      this.cursosApi.deleteCurso(course).pipe(
        switchMap(() => this.cursosApi.getCursos())
      ).subscribe(cursos => {
        this.cursos = cursos;
      } );
  
    }
}
