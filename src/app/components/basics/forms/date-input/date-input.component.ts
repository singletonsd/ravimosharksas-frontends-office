import { Component } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseInputFormComponent } from '@app/models/base-input.class';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent extends BaseInputFormComponent {

  constructor() {
    super();
  }

}
