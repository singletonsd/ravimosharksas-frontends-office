import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';

@Component({
  selector: 'app-contracts-form',
  templateUrl: './contracts-form.component.html',
  styleUrls: ['./contracts-form.component.scss']
})
export class ContractsFormComponent extends BaseFormNewComponent {

  constructor() {
    super('CONTRACTS_FORM', 'models.contract.');
    this.form.addControl('refContract', new FormControl('', [ ]));
    this.form.addControl('client', new FormControl('', [ Validators.required ]));
    this.form.addControl('identification', new FormControl('', []));
    this.form.addControl('dateDebut', new FormControl('', [ ]));
    this.form.addControl('dateFin', new FormControl('', [ Validators.required ]));
    this.form.addControl('reconduction', new FormControl('', []));
    this.form.addControl('loyer', new FormControl('', []));
    this.form.addControl('miniconso', new FormControl('', []));
    this.form.addControl('reviewed', new FormControl('', []));
    this.form.addControl('valid', new FormControl('', []));
  }

}
