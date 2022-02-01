import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  message: string = 'Este campo es requerido';
  color: string = 'blue';

  myForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  isValid(field: string) {
    return this.myForm.get(field)?.valid || false;
  }

  changeMessage(): void {
    this.message = 'Por favor complete este campo';
  }

  changeColor(): void {
    this.color = 'red';
  }
}
