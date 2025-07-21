import { Component } from '@angular/core';
import { Boldtitle } from '../../shared/directives/boldtitle';

@Component({
  selector: 'app-toolbar',
  imports: [Boldtitle],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {

}
