import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent extends BaseFormNewComponent {

  constructor() {
    super('CLIENTS_FORM', 'models.client.');
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

}
