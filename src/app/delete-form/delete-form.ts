import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './delete-form.html',
  styleUrl: './delete-form.scss'
})
export class DeleteForm implements OnInit {
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
      const { dni } = this.deleteStudentForm.value;
      this.studentDeleted.emit(dni);
      this.deleteStudentForm.reset();
    }

  }
}
