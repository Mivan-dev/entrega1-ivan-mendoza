import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../../shared/entities';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-curso-tabla',
  imports: [MatTableModule, RouterModule],
  templateUrl: './curso-tabla.html',
  styleUrl: './curso-tabla.scss'
})
export class CursoTabla {
  @Input() courses: Course[] = [];
  @Output() deleteEvent = new EventEmitter<Course>();

  displayedColumns: string[] = ['name', 'description', 'duration', 'actions'];

  constructor (private router: Router) { }

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
