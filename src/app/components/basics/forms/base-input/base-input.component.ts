// tslint:disable: no-implicit-dependencies
import { Component } from '@angular/core';
import { BaseInputFormComponent } from '@app/models/base-input-form.class';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss']
})
export class BaseInputComponent extends BaseInputFormComponent {

  constructor() {
    super();
  }

}
