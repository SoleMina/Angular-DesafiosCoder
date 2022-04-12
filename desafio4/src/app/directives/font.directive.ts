import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFont]',
})
export class FontDirective implements OnInit {
  @Input('appFont') font!: string;

  constructor(private elemento: ElementRef) {
    this.elemento.nativeElement.style.fontSize = this.font;
    this.elemento.nativeElement.style.fontWeight = 600;
  }
  ngOnInit(): void {
    console.log(this.font);
    this.elemento.nativeElement.style.fontSize = this.font;
    this.elemento.nativeElement.style.fontWeight = 600;
  }
}
