import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit{
  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() message: string = 'Este campo es obligatorio';

  constructor( private element: ElementRef<HTMLElement>) {
    this.htmlElement = element;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setClass();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.message;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}