import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';

@Component({
  selector: 'app-machines-form',
  templateUrl: './machines-form.component.html',
  styleUrls: ['./machines-form.component.scss']
})
export class MachinesFormComponent extends BaseFormNewComponent {

  constructor() {
    super('MACHINES_ADD_FORM', 'models.machine.');
    this.form.addControl('id', new FormControl('', [ ]));
    this.form.addControl('numSerie', new FormControl('', [ Validators.required ]));
    this.form.addControl('piece', new FormControl('', [ Validators.required ]));
  }

}
