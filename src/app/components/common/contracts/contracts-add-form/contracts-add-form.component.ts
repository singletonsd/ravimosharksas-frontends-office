import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// tslint:disable: no-implicit-dependencies
import { BaseFormAddComponent } from '@app/models/base-form-add.class';
import { environment } from '@env/environment';
import { Contracts } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';
// import { TranslateService } from '@ngx-translate/core';

declare var require: any;
@Component({
  selector: 'app-contracts-add-form',
  templateUrl: './contracts-add-form.component.html',
  styleUrls: ['./contracts-add-form.component.scss']
})
export class ContractsAddFormComponent extends BaseFormAddComponent<Contracts> implements OnInit {

  constructor(logger: NGXLogger
            // , private readonly translate: TranslateService
            , cdr: ChangeDetectorRef
            ) {
    super('CONTRACTS_ADD_FORM', 'models.contract.', cdr, logger);
    // this.form.get('client')
    //   .disable();
    // this.form.get('refContract')
    //   .disable();
    // this.form.get('dateDebut')
    //   .disable();
    // this.form.get('dateFin')
    //   .disable();
    if (!environment.production && !this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'adding data from mock json...');
      // tslint:disable-next-line:no-require-imports
      this.item = require('../../../../../../test/mock_data/contracts.json')[0];
      this.logger.debug(this.item);
    }
  }

  ngOnInit(): void {
  }

  protected fillForm(): void {
    this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.refContract);
    this.form.get('contract.refContract')
      .setValue(this.item.refContract);
    this.form.get('contract.dateDebut')
    .setValue(this.item.dateDebut);
    this.form.get('contract.dateFin')
    .setValue(this.item.dateFin);
    this.form.get('contract.loyer')
    .setValue(this.item.loyer);
    this.form.get('contract.miniconso')
    .setValue(this.item.miniconso);
    this.form.get('contract.reconduction')
    .setValue(this.item.reconduction);
    this.form.get('contract.identification')
    .setValue(this.item.identification);
    this.form.get('contract.client')
    .setValue(this.item.client);
    this.form.get('contract.reviewed')
    .setValue(this.item.reviewed);
    this.form.get('contract.valid')
    .setValue(this.item.valid);
  }

  finishSubmit(): void {
    const data = this.form.value;
    this.logger.debug(this.COMPONENT_NAME, 'form submitted.', data);
    if (this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'edit', this.item);
      // const prevName = this.contract.name;
      this.item = data;
      // this.addresssService.editaddress(this.contract)
      // .subscribe(() => {
      //   this.translate.get('pages.contract.results.success.edit')
      //     .subscribe(text => {
      //       this.notification.success(text);
      //       this.logger.debug(this.COMPONENT_NAME, 'success', this.contract);
      //       this.finishAPICall(false);
      //     });
      // }, error => {
      //   const translate = (error && error.error && error.error.message ? error.error.message : 'fields.errors.unknown');
      //   this.contract.name = prevName;
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
      //   this.translate.get('pages.contract.results.success.add')
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
