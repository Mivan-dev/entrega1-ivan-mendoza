import { Component, Input } from '@angular/core';
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

  displayedColumns: string[] = ['fullname', 'age', 'dni', 'average', 'actions'];

  constructor (private router: Router) { }

  viewDetails(student: Student) {
    this.router.navigate(['/ver-alumno'],{
      state: { student }
  });
  }
}
