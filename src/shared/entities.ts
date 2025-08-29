

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
  { username: 'user', password: 'user123', role: 'user' },
  { username: 'guest', password: 'guest123', role: 'user' },
  { username: 'Ivan', password: 'ivan123', role: 'admin' },
  { username: 'Maria', password: 'maria123', role: 'user' },
  { username: 'Pedro', password: 'pedro123', role: 'user' }
];