import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-input',
  template: '',
})
export class BaseInputComponent {
  @Input() controlName: string;
  @Input() form: FormGroup;
  constructor() {}
}
