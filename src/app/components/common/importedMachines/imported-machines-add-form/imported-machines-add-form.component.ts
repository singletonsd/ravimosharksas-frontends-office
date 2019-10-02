import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable: no-implicit-dependencies
import { BaseFormComponent } from '@app/models/base-form.class';
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
export class ImportedMachinesAddFormComponent extends BaseFormComponent implements OnInit, AfterViewInit {

  @Input() item: ImportedMachines;

  @Output() readonly added = new EventEmitter<ImportedMachines>();

  constructor(private readonly logger: NGXLogger
            // , private readonly translate: TranslateService
            , private readonly cdr: ChangeDetectorRef) {
    super('IMPORTED_MACHINES_ADD_FORM', 'models.machine.');
    this.form.addControl('id', new FormControl('', [ ]));
    this.form.addControl('identification', new FormControl('', [ Validators.required ]));
    this.form.addControl('machine.piece', new FormControl('', [ Validators.required ]));
    this.form.addControl('machine.serial_number', new FormControl('', [ Validators.required ]));
    this.form.addControl('contract', new FormControl('', [ Validators.required ]));
    this.form.addControl('reviewed', new FormControl('', [ Validators.required ]));
    this.form.get('id')
      .disable();
    this.form.get('identification')
      .disable();
    this.form.get('contract')
      .disable();
    if (!environment.production && !this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'adding data from mock json...');
      // tslint:disable-next-line:no-require-imports
      this.item = require('../../../../../../test/mock_data/imported_machines.json')[0];
      this.logger.debug(this.item);
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.id);
      this.form.get('id')
      .setValue(this.item.id);
      this.form.get('identification')
      .setValue(this.item.identification);
      if (this.item.machine) {
        this.form.get('machine.piece')
        .setValue(this.item.machine.piece);
        this.form.get('machine.serial_number')
        .setValue(this.item.machine.numSerie);
      }
      if (this.item.contract) {
        this.form.get('contract')
          .setValue(this.item.contract);
      } else {
        this.form.get('contract')
          .setValue(this.item.refContract);
      }
      this.form.get('reviewed')
        .setValue(this.item.reviewed);
      this.cdr.detectChanges();
    }
  }

  onSubmit(): void {
    super.onSubmit();
    if (this.form.invalid) {
      return;
    }
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
