import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Course } from '../../../shared/entities';

@Injectable({
  providedIn: 'root'
})
export class CursosAPI {
  // baseUrl: string = 'http://localhost:3000';
  baseUrl: string = 'https://68a005ac6e38a02c581795b4.mockapi.io/api/v1/Courses';

  constructor(
    private http: HttpClient
  ) { }

  getCursos(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }

  getCursoPorId(id: string): Observable<Course> {
  return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }

  deleteCurso(courses: Course): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${courses.id}`);
  }

  updateCurso(courses: Course): Observable<Course> {
  return this.http.put<Course>(`${this.baseUrl}/${courses.id}`, courses);
  }
}
