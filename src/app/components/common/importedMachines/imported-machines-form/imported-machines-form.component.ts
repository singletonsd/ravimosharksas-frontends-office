import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';

@Component({
  selector: 'app-imported-machines-form',
  templateUrl: './imported-machines-form.component.html',
  styleUrls: ['./imported-machines-form.component.scss']
})
export class ImportedMachinesFormComponent extends BaseFormNewComponent {

  constructor() {
    super('IMPORTED_MACHINES_FORM', 'models.contract.');
    this.form.addControl('id', new FormControl('', [ ]));
    this.form.addControl('identification', new FormControl('', [ Validators.required ]));
    this.form.addControl('contract', new FormControl('', [ Validators.required ]));
    this.form.addControl('reviewed', new FormControl('', [ Validators.required ]));
  }

}
