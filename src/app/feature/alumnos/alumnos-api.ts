import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Student } from '../../../shared/entities';

@Injectable({
  providedIn: 'root'
})
export class AlumnosAPI {
  baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getAlumnos(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`).pipe(delay(500));
  }

  getAlumnoPorDni(dni: string): Observable<Student> {
  return this.http.get<Student>(`${this.baseUrl}/students/${dni}`).pipe(delay(500));
  }

  deleteAlumno(student: Student): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/students/${student.dni}`).pipe(delay(500));
  }

  updateAlumno(student: Student): Observable<Student> {
  return this.http.put<Student>(`${this.baseUrl}/students/${student.dni}`, student).pipe(delay(500));
  }

}
