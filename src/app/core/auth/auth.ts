import { Injectable } from '@angular/core';
import { LoggedUser } from '../../../shared/entities';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  
  // use knowledge table
  usersData = [
    {username: 'admin', password: 'admin123', role: 'admin'},
    {username: 'user', password: 'user123', role: 'user'}
  ];

// tiene que ser un subject para notificar cuando cambia
private loggedUserSubject = new BehaviorSubject<LoggedUser | null>(null);
loggedUser$ = this.loggedUserSubject.asObservable();

constructor() {}

logIn(username: string, password: string): boolean {
  // Lógica de autenticación
  const user = this.usersData.find(u => u.username === username && u.password === password);
  if(user) {
    this.loggedUserSubject.next({username: user.username, role: user.role});
    return true;
  }
  return false;
}

// Se agrega para unit Test
  getCurrentUser(): LoggedUser | null {
    return this.loggedUserSubject.value;
  }

//chequear si es admin
isAdmin(): boolean {
  // Lógica para determinar si el usuario es admin
  const user = this.usersData.find(u => u.username === 'admin');
  return user !== undefined;
}

}

