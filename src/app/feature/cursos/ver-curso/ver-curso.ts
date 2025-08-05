import { Component } from '@angular/core';
import { Course } from '../../../../shared/entities';
import { Router } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ver-curso',
  imports: [JsonPipe, CommonModule],
  templateUrl: './ver-curso.html',
  styleUrl: './ver-curso.scss'
})
export class VerCurso {
  course: Course | undefined;

  constructor(private router: Router){
    const navigation = this.router.getCurrentNavigation();
    this.course = navigation?.extras.state?.['course'];
    
  }
}
