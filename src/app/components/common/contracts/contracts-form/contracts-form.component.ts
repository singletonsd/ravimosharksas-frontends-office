import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { Contracts } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-contracts-form',
  templateUrl: './contracts-form.component.html',
  styleUrls: ['./contracts-form.component.scss']
})
export class ContractsFormComponent extends BaseFormNewComponent<Contracts> {

  constructor(logger: NGXLogger) {
    super('CONTRACTS_FORM', 'models.contract.', logger, 'contract');
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

  protected fillForm(): void {
    this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.refContract);
    this.form.get('refContract')
    .setValue(this.item.refContract);
    this.form.get('dateDebut')
    .setValue(this.item.dateDebut);
    this.form.get('dateFin')
    .setValue(this.item.dateFin);
    this.form.get('loyer')
    .setValue(this.item.loyer);
    this.form.get('miniconso')
    .setValue(this.item.miniconso);
    this.form.get('reconduction')
    .setValue(this.item.reconduction);
    this.form.get('identification')
    .setValue(this.item.identification);
    this.form.get('client')
    .setValue(this.item.client);
    this.form.get('reviewed')
    .setValue(this.item.reviewed);
    this.form.get('valid')
    .setValue(this.item.valid);

    this.form.get('refContract')
      .disable();
    this.form.get('client')
      .disable();
    this.form.get('refContract')
      .disable();
    this.form.get('dateDebut')
      .disable();
    this.form.get('dateFin')
      .disable();
  }
}
