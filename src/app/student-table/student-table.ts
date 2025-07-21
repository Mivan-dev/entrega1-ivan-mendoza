import { Component, Input } from '@angular/core';
import { Student } from '../../shared/entities';
import { MatTableModule } from '@angular/material/table';
import { FullnamePipe } from '../../shared/pipes/fullname-pipe';

@Component({
  selector: 'app-student-table',
  imports: [MatTableModule, FullnamePipe],
  templateUrl: './student-table.html',
  styleUrl: './student-table.scss'
})
export class StudentTable {
  
  @Input() students: Student[] = [];

  displayedColumns: string[] = ['fullname', 'age', 'dni', 'average'];
}
