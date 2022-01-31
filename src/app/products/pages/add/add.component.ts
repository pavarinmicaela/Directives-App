import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  myForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  isValid(field: string) {
    return this.myForm.get(field)?.valid || false;
  }
}
