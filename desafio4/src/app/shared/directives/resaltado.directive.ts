import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective implements OnInit {
  @Input('appResaltado') colorResaltado!: string;

  constructor(private elemento: ElementRef) {
    this.elemento.nativeElement.style.backgroundColor = this.colorResaltado;
  }
  ngOnInit(): void {
    console.log(this.colorResaltado);
    this.elemento.nativeElement.style.backgroundColor = this.colorResaltado;
  }
}
