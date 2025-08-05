import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../../shared/entities';
import { CommonModule, JsonPipe } from '@angular/common';
import { AlumnosAPI } from '../alumnos-api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-alumno',
  imports: [JsonPipe, CommonModule, ReactiveFormsModule],
  templateUrl: './editar-alumno.html',
  styleUrl: './editar-alumno.scss'
})
// export class EditarAlumno {
//   student: Student | undefined;

//   constructor(private router: Router) {
//     const navigation = this.router.getCurrentNavigation();
//     this.student = navigation?.extras.state?.['student'];
//   } 

//    editStudent() {
//     if (this.student) {
//       this.router.navigate(['/editar-alumno'], {
//         state: { student: this.student }
//       });
//     } else {
//       console.error('No student data available');
//     }
//   }
// }

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
  const dni = this.route.snapshot.paramMap.get('dni');

  if (!dni) {
    console.error('No se encontró el dni en la URL');
    this.router.navigate(['/alumnos']);
    return;
  }

  this.alumnosAPI.getAlumnoPorDni(dni).subscribe({
    next: (student) => {
      this.originalStudent = student;

      this.studentForm = this.fb.group({
        name: [student.name, Validators.required],
        surname: [student.surname, Validators.required],
        age: [student.age, [Validators.required, Validators.min(1)]],
        dni: [student.dni, Validators.required],
        average: [student.average, Validators.required]
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