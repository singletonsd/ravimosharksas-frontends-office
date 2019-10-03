import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// tslint:disable: no-implicit-dependencies
import { BaseFormAddComponent } from '@app/models/base-form-add.class';
import { environment } from '@env/environment';
import { ImportedMachines } from '@ravimosharksas/apis-contract-libs-typescript';
// import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

declare var require: any;
@Component({
  selector: 'app-imported-machines-add-form',
  templateUrl: './imported-machines-add-form.component.html',
  styleUrls: ['./imported-machines-add-form.component.scss']
})
export class ImportedMachinesAddFormComponent extends BaseFormAddComponent<ImportedMachines> implements OnInit {

  constructor(logger: NGXLogger
            // , private readonly translate: TranslateService
            , cdr: ChangeDetectorRef) {
    super('IMPORTED_MACHINES_ADD_FORM', 'models.machine.', cdr, logger);
    // this.form.get('id')
    //   .disable();
    // this.form.get('identification')
    //   .disable();
    // this.form.get('contract')
    //   .disable();
    if (!environment.production && !this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'adding data from mock json...');
      // tslint:disable-next-line:no-require-imports
      this.item = require('../../../../../../test/mock_data/imported_machines.json')[0];
      this.item.machine = { id: 123355, numSerie: 'serialDS', piece: { name: 'C20', refArticle: '12as2'}};
      this.logger.debug(this.item);
    }
  }

  ngOnInit(): void {
  }

  protected fillForm(name: string): void {
    if (name === 'imported_machine') {
      this.logger.debug(this.COMPONENT_NAME, `filling form ${name} with data of ${this.item.id}`);
      this.form.get(`${name}.id`)
      .setValue(this.item.id);
      this.form.get(`${name}.identification`)
      .setValue(this.item.identification);
      if (this.item.contract) {
        this.form.get(`${name}.contract`)
          .setValue(this.item.contract);
      } else {
        this.form.get(`${name}.contract`)
          .setValue(this.item.refContract);
      }
      this.form.get(`${name}.reviewed`)
        .setValue(this.item.reviewed);
    }
    if (name === 'machine') {
      if (this.item.machine) {
        this.form.get(`${name}.id`)
        .setValue(this.item.id);
        this.form.get(`${name}.piece`)
        .setValue(this.item.machine.piece);
        this.form.get(`${name}.numSerie`)
        .setValue(this.item.machine.numSerie);
      }
    }
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
      //   this.translate.get('pages.item.results.success.edit')
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
      //   this.translate.get('pages.item.results.success.add')
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
