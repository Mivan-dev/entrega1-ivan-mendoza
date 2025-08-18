import { Injectable } from '@angular/core';
import { LoggedUser } from '../../../shared/entities';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  
  // use knowledge table
  usersData = [
    {username: 'admin', password: 'admin123', role: 'admin'},
    {username: 'user', password: 'user123', role: 'user'}
  ];

loggedUser : LoggedUser | null = null;

logIn(username: string, password: string): boolean {
  // Lógica de autenticación
  const user = this.usersData.find(u => u.username === username && u.password === password);
  if(user) {
    this.loggedUser = {username: user.username, role: user.role};
    return true;
  }
  return false;
}

//chequear si es admin
isAdmin(): boolean {
  // Lógica para determinar si el usuario es admin
  const user = this.usersData.find(u => u.username === 'admin');
  return user !== undefined; // Cambiar esto según la lógica de tu aplicación
}

}

