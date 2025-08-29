import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Student } from '../../../../shared/entities';

@Component({
  selector: 'app-ver-alumno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-alumno.html',
  styleUrl: './ver-alumno.scss'
})
export class VerAlumno {
  
  studentFullname = '';
  studentAge?: number;
  studentDni?: number;
  studentAverage?: number;
  studentNotFound = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const student = navigation?.extras?.state?.['student'] as Student | undefined;

    if (student) {
      this.studentFullname = `${student.name} ${student.surname}`;
      this.studentAge = student.age;
      this.studentDni = student.dni;
      this.studentAverage = student.average;
      this.studentNotFound = '';
    } else {
      this.studentNotFound = 'No se encontró información del alumno.';
    }
  }
}
