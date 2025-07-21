import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoldtitle]'
})
export class Boldtitle {

  constructor(
    private el: ElementRef, 
    //Usar Renderer2 y no otros elementos manuales fuera de Angular 
    private renderer: Renderer2
  ) { }

  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }

}
