import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{
  
  private _color: string = 'green';
  private _message: string = 'Rellenar este campo';
  
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(color: string) {
    this._color = color;
    this.setColor();
  }
  
  @Input() set message(message: string) {
    this._message = message;
    this.setMessage();
  }

  @Input() set valid(valid: boolean) {
    if (valid) {
      this.htmlElement.nativeElement.classList.add('invisible');
    } else {
      this.htmlElement.nativeElement.classList.remove('invisible');
    }
  }

  constructor( private element: ElementRef<HTMLElement>) {
    this.htmlElement = element;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    /* if (changes.message) {
      const message = changes.message.currentValue;
      this.htmlElement.nativeElement.innerText = message;
    }
    
    if (changes.color) {
      const color = changes.color.currentValue;
      this.htmlElement.nativeElement.style.color = color;
    } */
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setClass();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}