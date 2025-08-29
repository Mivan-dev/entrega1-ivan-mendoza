import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Course } from '../../../../shared/entities';

@Component({
  selector: 'app-ver-curso',
  imports: [CommonModule],
  templateUrl: './ver-curso.html',
  styleUrl: './ver-curso.scss'
})
export class VerCurso {
  // Props planas para el template
  courseName?: string;
  courseDescription?: string;
  courseDuration?: string;
  courseNotFound = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const course = navigation?.extras?.state?.['course'] as Course | undefined;

    if (course) {
      this.courseName = course.name;
      this.courseDescription = course.description;
      this.courseDuration = course.duration;
      this.courseNotFound = '';
    } else {
      this.courseNotFound = 'No se encontró información del curso.';
    }
  }
}
