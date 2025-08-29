import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../../shared/entities';
import { CommonModule } from '@angular/common';
import { AlumnosAPI } from '../alumnos-api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-alumno',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar-alumno.html',
  styleUrl: './editar-alumno.scss'
})

export class EditarAlumno implements OnInit {
  studentForm!: FormGroup;
  originalStudent!: Student;

  constructor(
  private router: Router,
  private fb: FormBuilder,
  private alumnosAPI: AlumnosAPI,
  private route: ActivatedRoute
) {}

  ngOnInit(): void {
    // Uso snapshot porque es mas rapido y no espero que cambie el dni en la misma instancia del componente
  const id = this.route.snapshot.paramMap.get('id');

  if (!id) {
    console.error('No se encontró el id en la URL');
    this.router.navigate(['/alumnos']);
    return;
  }

  this.alumnosAPI.getAlumnoPorId(id).subscribe({
    next: (student) => {
      this.originalStudent = student;

      this.studentForm = this.fb.group({
        name: [student.name, 
        [
          // minimo 2 y solo letras y espacios
          Validators.required, Validators.minLength(2), 
          Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')
        ]
      ],

      surname: [student.surname, 
        [
          // minimo 2 y solo letras y espacios
          Validators.required, Validators.minLength(2), 
          Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')
        ]
      ],

      dni: [student.dni, 
            [
              // solo numeros de 7 u 8 digitos. Ej: 5.000.000 o 05.000.000 (obviamente sin puntos)
              Validators.required,
              Validators.pattern('^[0-9]{7,8}$')
            ]
          ],

      age: [student.age, 
        [
          // solo numeros
          Validators.required, Validators.min(0),
          Validators.pattern('^[0-9]+$')
        ]
      ],

      average: [student.average, 
        [
          // solo numeros entre 0 y 10 y decimales
          Validators.required, 
          Validators.min(0), 
          Validators.max(10), 
          Validators.pattern('^[0-9]+(\\.[0-9]+)?$')
        ]],
    });
    },
    error: (err) => {
      console.error('Error al cargar alumno:', err);
      this.router.navigate(['/alumnos']);
    }
  });
}

  editarAlumno() {
    if (this.studentForm.valid) {
      const updatedStudent: Student = {
        ...this.originalStudent,
        ...this.studentForm.value
      };

      this.alumnosAPI.updateAlumno(updatedStudent).subscribe({
        next: () => this.router.navigate(['/alumnos']),
        error: err => console.error('Error al actualizar:', err)
      });
    } else {
      this.studentForm.markAllAsTouched();
    }
  }
}