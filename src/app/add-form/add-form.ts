import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../shared/entities';
import { Boldtitle } from '../../shared/directives/boldtitle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-form',
  imports: [ReactiveFormsModule, CommonModule, Boldtitle, NgbModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.scss'
})
export class AddForm implements OnInit {

  private _snackBar = inject(MatSnackBar);
  studentForm! : FormGroup;
  @Output() studentAdded = new EventEmitter<Student>();
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.studentForm = this.fb.group({

      name: ['', 
        [
          // minimo 2 y solo letras y espacios
          Validators.required, Validators.minLength(2), 
          Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')
        ]
      ],

      surname: ['', 
        [
          // minimo 2 y solo letras y espacios
          Validators.required, Validators.minLength(2), 
          Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')
        ]
      ],

      dni: ['', 
            [
              // solo numeros de 7 u 8 digitos. Ej: 5.000.000 o 05.000.000 (obviamente sin puntos)
              Validators.required,
              Validators.pattern('^[0-9]{7,8}$')
            ]
          ],

      age: ['', 
        [
          // solo numeros
          Validators.required, Validators.min(0),
          Validators.pattern('^[0-9]+$')
        ]
      ],

      average: ['', 
        [
          // solo numeros entre 0 y 10 y decimales
          Validators.required, 
          Validators.min(0), 
          Validators.max(10), 
          Validators.pattern('^[0-9]+(\\.[0-9]+)?$')
        ]],
    });
  }

  onSubmit() {
    this.studentAdded.emit(this.studentForm.value);
     if (this.studentForm.valid) {
      this.showSuccessAdd();
      this.studentForm.reset();
  } 
}

  onReset() {
    this.studentForm.reset();
  }

  showSuccessAdd(){
      const message = 'Estudiante agregado correctamente';
      const action = 'Close';
      this._snackBar.open(message, action);
  }
}
