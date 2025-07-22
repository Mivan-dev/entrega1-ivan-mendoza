import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../shared/entities';
import { Boldtitle } from '../../shared/directives/boldtitle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-form',
  imports: [ReactiveFormsModule, CommonModule, Boldtitle, NgbModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.scss'
})
export class AddForm implements OnInit {

  studentForm! : FormGroup;
  @Output() studentAdded = new EventEmitter<Student>();
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      dni: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      average: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }

  onSubmit() {
    this.studentAdded.emit(this.studentForm.value);
  } 

  onReset() {
    this.studentForm.reset();
  }
}
