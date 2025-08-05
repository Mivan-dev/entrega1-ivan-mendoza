import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Course } from '../../../shared/entities';

@Injectable({
  providedIn: 'root'
})
export class CursosAPI {
  baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getCursos(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`).pipe(delay(500));
  }

  getCursoPorId(id: string): Observable<Course> {
  return this.http.get<Course>(`${this.baseUrl}/courses/${id}`).pipe(delay(500));
  }

  deleteCurso(courses: Course): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/courses/${courses.id}`).pipe(delay(500));
  }

  updateCurso(courses: Course): Observable<Course> {
  return this.http.put<Course>(`${this.baseUrl}/courses/${courses.id}`, courses).pipe(delay(500));
  }
}
