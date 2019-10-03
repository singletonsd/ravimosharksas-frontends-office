import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { ImportedMachines } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-imported-machines-form',
  templateUrl: './imported-machines-form.component.html',
  styleUrls: ['./imported-machines-form.component.scss']
})
export class ImportedMachinesFormComponent extends BaseFormNewComponent<ImportedMachines> {

  constructor(logger: NGXLogger) {
    super('IMPORTED_MACHINES_FORM', 'models.contract.', logger, 'imported_machine');
    this.form.addControl('id', new FormControl('', [ ]));
    this.form.addControl('identification', new FormControl('', [ Validators.required ]));
    this.form.addControl('contract', new FormControl('', [ Validators.required ]));
    this.form.addControl('reviewed', new FormControl('', [ Validators.required ]));
  }

  protected fillForm(): void {
    this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.id);
    this.form.get(`id`)
    .setValue(this.item.id);
    this.form.get(`identification`)
    .setValue(this.item.identification);
    if (this.item.contract) {
      this.form.get(`contract`)
        .setValue(this.item.contract);
    } else {
      this.form.get(`contract`)
        .setValue(this.item.refContract);
    }
    this.form.get(`reviewed`)
      .setValue(this.item.reviewed);
  }
}
