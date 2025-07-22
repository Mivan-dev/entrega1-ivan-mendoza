import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-form',
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './delete-form.html',
  styleUrl: './delete-form.scss'
})
export class DeleteForm implements OnInit {
  private _snackBar = inject(MatSnackBar);
  @Output() studentDeleted = new EventEmitter<string>();

  deleteStudentForm! : FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.deleteStudentForm = this.fb.group({
      dni: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  onDelete() {
    if (this.deleteStudentForm.valid) {
      this.showSuccessDelete();
      const { dni } = this.deleteStudentForm.value;
      this.studentDeleted.emit(dni);
      this.deleteStudentForm.reset();
    }
  };

    showSuccessDelete(){
      const message = 'Estudiante eliminado correctamente';
      const action = 'Close';
      this._snackBar.open(message, action);
    }
  
}
