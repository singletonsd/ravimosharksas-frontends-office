import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseFormAddComponent } from '@app/models/base-form-add.class';
import { Clients } from '@ravimosharksas/apis-contract-libs-typescript';
// import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-clients-add-form',
  templateUrl: './clients-add-form.component.html',
  styleUrls: ['./clients-add-form.component.scss']
})
export class ClientsAddFormComponent extends BaseFormAddComponent<Clients> implements OnInit {

  constructor(private readonly logger: NGXLogger
            // , private readonly translate: TranslateService
            , cdr: ChangeDetectorRef
            ) {
    super('CLIENTS_ADD_FORM', 'models.client.', cdr);
    this.form.addControl('refClient', new FormControl('', [ Validators.required ]));
    this.form.addControl('nickname', new FormControl('', []));
    this.form.addControl('name', new FormControl('', []));
    this.form.addControl('surname', new FormControl('', []));
    this.form.addControl('group', new FormControl('', []));
    this.form.addControl('company_name', new FormControl('', []));
    this.form.addControl('score', new FormControl('', []));
    this.form.addControl('sector', new FormControl('', []));
    this.form.addControl('email', new FormControl('', []));
    this.form.addControl('forbidden', new FormControl('', []));
    this.form.addControl('vat', new FormControl('', []));
  }

  ngOnInit(): void {
  }

  fillForm(): void {
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

  finishSubmit(): void {
    const data = this.form.value;
    this.logger.debug(this.COMPONENT_NAME, 'form submitted.', data);
    if (this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'edit', this.item);
      // const prevName = this.item.name;
      this.item = data;
      // this.addresssService.editaddress(this.item)
      // .subscribe(() => {
      //   this.translate.get('pages.client.results.success.edit')
      //     .subscribe(text => {
      //       this.notification.success(text);
      //       this.logger.debug(this.COMPONENT_NAME, 'success', this.item);
      //       this.finishAPICall(false);
      //     });
      // }, error => {
      //   const translate = (error && error.error && error.error.message ? error.error.message : 'fields.errors.unknown');
      //   this.item.name = prevName;
      //   this.translate.get(translate)
      //     .subscribe(text => {
      //       this.notification.error(text);
      //       this.logger.warn(this.COMPONENT_NAME, 'An error occur', error);
      //       this.finishAPICall(false);
      //     });
      // });
    } else {
      this.logger.debug(this.COMPONENT_NAME, 'add');
      // this.addresssService.addaddress({ name: data })
      // .subscribe((newAddress: addresss) => {
      //   this.translate.get('pages.client.results.success.add')
      //     .subscribe(text => {
      //       this.notification.success(text);
      //       this.logger.debug(this.COMPONENT_NAME, 'success', newAddress);
      //       this.added.next(newAddress);
      //       this.finishAPICall(false);
      //     });
      // }, error => {
      //   const translate = (error && error.error && error.error.message ? error.error.message : 'fields.errors.unknown');
      //   this.translate.get(translate)
      //     .subscribe(text => {
      //       this.notification.error(text);
      //       this.logger.warn(this.COMPONENT_NAME, 'An error occur', error);
      //       this.finishAPICall(false);
      //     });
      // });
    }
  }
}
