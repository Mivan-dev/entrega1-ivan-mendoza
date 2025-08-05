import { Component } from '@angular/core';
import { Student } from '../../../../shared/entities';
import { Router } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ver-alumno',
  imports: [JsonPipe, CommonModule],
  templateUrl: './ver-alumno.html',
  styleUrl: './ver-alumno.scss'
})
export class VerAlumno {
  student: Student | undefined;

  constructor(private router: Router){
    const navigation = this.router.getCurrentNavigation();
    this.student = navigation?.extras.state?.['student'];
    
  }

}
