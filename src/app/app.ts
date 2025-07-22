import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Toolbar } from './toolbar/toolbar';
import { Navbar } from './navbar/navbar';
import { HttpClient } from '@angular/common/http';
import { Student } from '../shared/entities';
import { StudentTable } from "./student-table/student-table";
import { AddForm } from "./add-form/add-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Toolbar, Navbar, StudentTable, AddForm],
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

  addStudent(student: Student) {
    // No hacer esto con objetos anidados.
    console.log('Nuevo estudiante agregado:', student);
    this.students = [...this.students, student];
    // Aquí podrías hacer una llamada a la API para guardar el nuevo estudiante.
  }
}
