

export interface Student {
    id: string;
    name: string;
    surname: string;
    age: number;
    dni: number;
    average: number;
}

export interface Course {
    id: number;
    name: string;
    description: string;
    duration: string;
}

export interface LoggedUser {
  username: string;
  role: 'admin' | 'user';
}

export interface User {
  username: string;
  password: string;
  role: 'admin' | 'user';
}

export const USERS_DATA: User[] = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' }
];