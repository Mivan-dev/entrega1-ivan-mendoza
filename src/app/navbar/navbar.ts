import { Component, EventEmitter, Output } from '@angular/core';
import { Boldtitle } from '../../shared/directives/boldtitle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [Boldtitle, NgbModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Output() activeSection = new EventEmitter<string>();

  navigate(section: string) {
    this.activeSection.emit(section);
  }
}
