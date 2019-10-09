import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { Machines } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-machines-form',
  templateUrl: './machines-form.component.html',
  styleUrls: ['./machines-form.component.scss']
})
export class MachinesFormComponent extends BaseFormNewComponent<Machines> {

  constructor(logger: NGXLogger) {
    super('MACHINES_FORM', 'models.machine.', logger, 'machine');
    this.form.addControl('id', new FormControl('', [ ]));
    this.form.addControl('serialNumber', new FormControl('', [ Validators.required ]));
    this.form.addControl('piece', new FormControl('', [ Validators.required ]));
    this.form.get('id')
      .disable();
  }

  protected fillForm(): void {
    this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.id);
    this.form.get('id')
    .setValue(this.item.id);
    this.form.get('serialNumber')
    .setValue(this.item.serialNumber);
    this.form.get('piece')
    .setValue(this.item.piece || this.item.refArticle);
  }

  protected afterControlAdded(): void {
  }
}
