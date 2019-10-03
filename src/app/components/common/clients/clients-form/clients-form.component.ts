import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { Clients } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent extends BaseFormNewComponent<Clients> {

  constructor(logger: NGXLogger) {
    super('CLIENTS_FORM', 'models.client.', logger, 'client');
    this.form.addControl('refClient', new FormControl('', [ Validators.required ]));
    this.form.addControl('nickname', new FormControl('', []));
    this.form.addControl('name', new FormControl('', []));
    // this.form.addControl('surname', new FormControl('', []));
    // this.form.addControl('group', new FormControl('', []));
    // this.form.addControl('company_name', new FormControl('', []));
    // this.form.addControl('score', new FormControl('', []));
    // this.form.addControl('sector', new FormControl('', []));
    // this.form.addControl('email', new FormControl('', []));
    // this.form.addControl('forbidden', new FormControl('', []));
    // this.form.addControl('vat', new FormControl('', []));
  }

  protected fillForm(): void {
    this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.refClient);
    this.form.get('refClient')
      .setValue(this.item.refClient);
    this.form.get('nickname')
    .setValue(this.item.nickname);
    this.form.get('name')
    .setValue(this.item.name);
    // this.form.get('surname')
    // .setValue(this.item.abrege);
    // this.form.get('group')
    // .setValue(this.item.group);
    // this.form.get('company_name')
    // .setValue(this.item.company_name);
    // this.form.get('score')
    // .setValue(this.item.score);
    // this.form.get('sector')
    // .setValue(this.item.sector);
    // this.form.get('email')
    // .setValue(this.item.email);
    // this.form.get('forbidden')
    // .setValue(this.item.forbidden);
    // this.form.get('vat')
    // .setValue(this.item.vat);
  }
}
