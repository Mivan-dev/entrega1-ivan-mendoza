import { Component, EventEmitter, Output } from '@angular/core';
import { Boldtitle } from '../../shared/directives/boldtitle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [Boldtitle, NgbModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Output() activeSection = new EventEmitter<string>();

  navigate(section: string) {
    this.activeSection.emit(section);
  }
}
