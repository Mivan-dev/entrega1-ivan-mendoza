import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../shared/entities';
import { MatTableModule } from '@angular/material/table';
import { FullnamePipe } from '../../shared/pipes/fullname-pipe';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-table',
  imports: [MatTableModule, FullnamePipe, RouterModule],
  templateUrl: './student-table.html',
  styleUrl: './student-table.scss'
})
export class StudentTable {
  
  @Input() students: Student[] = [];
  @Output() deleteEvent = new EventEmitter<Student>();

  displayedColumns: string[] = ['fullname', 'age', 'dni', 'average', 'actions'];

  constructor (private router: Router) { }

  viewDetails(student: Student) {
    this.router.navigate(['/ver-alumno'],{
      state: { student }
  });
  }

  deleteStudent(student: Student) {
    this.deleteEvent.emit(student);
  }

  editStudent(student: Student) {
    this.router.navigate(['/editar-alumno', student.dni],{
      state: { student }
  });
  }
}
