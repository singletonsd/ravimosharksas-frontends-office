import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseFormComponent } from '@app/models/base-form.class';
import { Contracts } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contracts-add-form',
  templateUrl: './contracts-add-form.component.html',
  styleUrls: ['./contracts-add-form.component.scss']
})
export class ContractsAddFormComponent extends BaseFormComponent implements OnInit, AfterViewInit {

  @Input() contract: Contracts;

  @Output() readonly added = new EventEmitter<Contracts>();

  constructor(private readonly logger: NGXLogger
            // , private readonly translate: TranslateService
            , private readonly cdr: ChangeDetectorRef
            ) {
    super('CONTRACTS_ADD_FORM', 'models.contract.');
    this.form.addControl('refContract', new FormControl('', [ Validators.required ]));
    this.form.addControl('identification', new FormControl('', []));
    this.form.addControl('dateDebut', new FormControl('', [ ]));
    this.form.addControl('dateFin', new FormControl('', [ Validators.required ]));
    this.form.addControl('reconduction', new FormControl('', []));
    this.form.addControl('loyer', new FormControl('', []));
    this.form.addControl('miniconso', new FormControl('', []));
    this.form.addControl('reviewed', new FormControl('', []));
    this.form.addControl('valid', new FormControl('', []));
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.contract) {
      this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.contract.refContract);
      this.form.get('refContract')
        .setValue(this.contract.refContract);
      this.form.get('dateDebut')
      .setValue(this.contract.dateDebut);
      this.form.get('dateFin')
      .setValue(this.contract.dateFin);
      this.form.get('loyer')
      .setValue(this.contract.loyer);
      this.form.get('miniconso')
      .setValue(this.contract.miniconso);
      this.form.get('reconduction')
      .setValue(this.contract.reconduction);
      this.form.get('identification')
      .setValue(this.contract.identification);
      this.form.get('reviewed')
      .setValue(this.contract.reviewed);
      this.form.get('valid')
      .setValue(this.contract.valid);
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
    if (this.contract) {
      this.logger.debug(this.COMPONENT_NAME, 'edit', this.contract);
      // const prevName = this.contract.name;
      this.contract = data;
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
