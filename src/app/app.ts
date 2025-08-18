import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Toolbar } from './layout/toolbar/toolbar';
import { Navbar } from './layout/navbar/navbar';
import { HttpClient } from '@angular/common/http';
import { Student } from '../shared/entities';
import { StudentTable } from "./feature/alumnos/student-table/student-table";
import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Toolbar, Navbar, StudentTable, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  
  students: Student[] = [];
  activeSection = "students";
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Student[]>('mocks/students.json').subscribe(data => {
      this.students = data;
    });
  }
}
