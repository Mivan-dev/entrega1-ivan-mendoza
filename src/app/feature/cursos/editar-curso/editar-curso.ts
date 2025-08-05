import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course, Student } from '../../../../shared/entities';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosAPI } from '../cursos-api';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-editar-curso',
  imports: [JsonPipe, CommonModule, ReactiveFormsModule],
  templateUrl: './editar-curso.html',
  styleUrl: './editar-curso.scss'
})
export class EditarCurso implements OnInit {
  courseForm!: FormGroup;
  originalCourse!: Course;

  constructor(
  private router: Router,
  private fb: FormBuilder,
  private cursosAPI: CursosAPI,
  private route: ActivatedRoute
) {}

  ngOnInit(): void {
    // Uso snapshot porque es mas rapido y no espero que cambie el id en la misma instancia del componente
  const id = this.route.snapshot.paramMap.get('id');

  if (!id) {
    console.error('No se encontró el id en la URL');
    this.router.navigate(['/cursos']);
    return;
  }

  this.cursosAPI.getCursoPorId(id).subscribe({
    next: (course) => {
      this.originalCourse = course;

      this.courseForm = this.fb.group({
        name: [course.name, Validators.required],
        description: [course.description, Validators.required],
        duration: [course.duration, [Validators.required, Validators.min(1)]],
        Id: [course.id, Validators.required],
      });
    },
    error: (err) => {
      console.error('Error al cargar curso:', err);
      this.router.navigate(['/cursos']);
    }
  });
}

  editarCurso() {
    if (this.courseForm.valid) {
      const updatedCourse: Course = {
        ...this.originalCourse,
        ...this.courseForm.value
      };

      this.cursosAPI.updateCurso(updatedCourse).subscribe({
        next: () => this.router.navigate(['/cursos']),
        error: err => console.error('Error al actualizar:', err)
      });
    } else {
      this.courseForm.markAllAsTouched();
    }
  }
}
