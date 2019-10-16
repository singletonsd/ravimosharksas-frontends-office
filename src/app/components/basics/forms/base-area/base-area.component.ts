import { Component } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseInputFormComponent } from '@app/models/base-input-form.class';

@Component({
  selector: 'app-base-area',
  templateUrl: './base-area.component.html',
  styleUrls: ['./base-area.component.scss']
})
export class BaseAreaComponent  extends BaseInputFormComponent {

  constructor() {
    super();
  }

}
