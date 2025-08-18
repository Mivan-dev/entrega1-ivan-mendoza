import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Student } from '../../../shared/entities';

@Injectable({
  providedIn: 'root'
})
export class AlumnosAPI {
  //baseUrl: string = 'http://localhost:3000'; // Si usas json-server local, adaptar paths
  baseUrl: string = 'https://68a005ac6e38a02c581795b4.mockapi.io/api/v1/students';

  constructor(
    private http: HttpClient
  ) { }

  getAlumnos(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }

  getAlumnoPorId(id: string): Observable<Student> {
  return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  deleteAlumno(student: Student): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${student.dni}`);
  }

  updateAlumno(student: Student): Observable<Student> {
  return this.http.put<Student>(`${this.baseUrl}/${student.id}`, student);
  }

}
