import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../../shared/entities';
import { MatTableModule } from '@angular/material/table';
import { FullnamePipe } from '../../../../shared/pipes/fullname-pipe';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAdmin } from '../../../ngrx/auth/auth.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-table',
  imports: [MatTableModule, MatButtonModule, MatIconModule, FullnamePipe, RouterModule, CommonModule],
  templateUrl: './student-table.html',
  styleUrl: './student-table.scss'
})
export class StudentTable {
  
  @Input() students: Student[] = [];
  @Output() deleteEvent = new EventEmitter<Student>();

  isAdmin$: Observable<boolean>;
  displayedColumns: string[] = ['fullname', 'age', 'dni', 'average', 'actions'];

  constructor (
    private router: Router,
    private store: Store
  ) { 
    this.isAdmin$ = this.store.select(selectIsAdmin);
  }

  viewDetails(student: Student) {
    this.router.navigate(['/ver-alumno'],{
      state: { student }
  });
  }

  deleteStudent(student: Student) {
    this.deleteEvent.emit(student);
  }

  editStudent(student: Student) {
    this.router.navigate(['/editar-alumno', student.id],{
      state: { student }
  });
  }
}
