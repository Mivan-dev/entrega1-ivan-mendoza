import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../../shared/entities';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAdmin } from '../../../ngrx/auth/auth.selectors';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso-tabla',
  imports: [MatTableModule, RouterModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './curso-tabla.html',
  styleUrl: './curso-tabla.scss'
})
export class CursoTabla {
  
  @Input() courses: Course[] = [];
  @Output() deleteEvent = new EventEmitter<Course>();

  isAdmin$: Observable<boolean>;
  displayedColumns: string[] = ['name', 'description', 'duration', 'actions'];

  constructor (
    private router: Router,
    private store: Store
  ) {
    this.isAdmin$ = this.store.select(selectIsAdmin);
  }

  viewDetails(course: Course) {
    this.router.navigate(['/ver-curso'],{
      state: { course }
  });
  }

  deleteCourse(course: Course) {
    this.deleteEvent.emit(course);
  }

  editCourse(course: Course) {
    this.router.navigate(['/editar-curso', course.id],{
      state: { course }
  });
  }
}
