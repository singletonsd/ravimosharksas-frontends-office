import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseFormComponent } from '@app/models/base-form.class';
import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-addresses-add-form',
  templateUrl: './addresses-add-form.component.html',
  styleUrls: ['./addresses-add-form.component.scss']
})
export class AddressesAddFormComponent extends BaseFormComponent implements OnInit {

  @Input() address: any;

  @Output() readonly added = new EventEmitter<any>();

  constructor(private readonly logger: NGXLogger
            , private readonly translate: TranslateService) {
    super('ADDRESS_ADD_FORM', 'models.address.');
    this.form.addControl('client', new FormControl('', [ Validators.required ]));
    this.form.addControl('name', new FormControl('', [ Validators.required ]));
    this.form.addControl('number', new FormControl('', [ ]));
    this.form.addControl('street', new FormControl('', [ Validators.required ]));
    this.form.addControl('postal-code', new FormControl('', [ ]));
    this.form.addControl('complement', new FormControl('', [ ]));
    this.form.addControl('city', new FormControl('', [ Validators.required ]));
    this.form.addControl('country', new FormControl('', [ Validators.required ]));
    this.form.addControl('telephone', new FormControl('', [ ]));
    this.form.addControl('attendant', new FormControl('', [ ]));
    this.form.addControl('delivery', new FormControl('', [ ]));
    this.form.addControl('latitude', new FormControl('', [ ]));
    this.form.addControl('longitude', new FormControl('', [ ]));
    this.form.addControl('type', new FormControl('', [ ]));
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    super.onSubmit();
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;
    this.logger.debug(this.COMPONENT_NAME, 'form submitted.', data);
    if (this.address) {
      this.logger.debug(this.COMPONENT_NAME, 'edit', this.address);
      const prevName = this.address.name;
      this.address.name = data;
      // this.addresssService.editaddress(this.address)
      // .subscribe(() => {
      //   this.translate.get('pages.address.results.success.edit')
      //     .subscribe(text => {
      //       this.notification.success(text);
      //       this.logger.debug(this.COMPONENT_NAME, 'success', this.address);
      //       this.finishAPICall(false);
      //     });
      // }, error => {
      //   const translate = (error && error.error && error.error.message ? error.error.message : 'fields.errors.unknown');
      //   this.address.name = prevName;
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
      //   this.translate.get('pages.address.results.success.add')
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
