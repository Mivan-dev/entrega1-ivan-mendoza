import { Component } from '@angular/core';
import { Student } from '../../../shared/entities';
import { AlumnosAPI } from './alumnos-api';
import { CommonModule, JsonPipe } from '@angular/common';
import { StudentTable } from "./student-table/student-table";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-alumnos',
  imports: [CommonModule, JsonPipe, StudentTable],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.scss'
})
export class Alumnos {
  alumnos!: Student[]
  constructor(private alumnosApi: AlumnosAPI) { } 

  ngOnInit() {
    this.alumnosApi.getAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos;
    });
  }

  deleteStudent(student: Student) {
    this.alumnosApi.deleteAlumno(student).pipe(
      // Despues que termina el delete, vuelve a obtener los alumnos
      // Ver que id conincida con el dni sino dara error
      switchMap(() => this.alumnosApi.getAlumnos())
    ).subscribe(alumnos => {
      this.alumnos = alumnos;
    } );

  }
}
