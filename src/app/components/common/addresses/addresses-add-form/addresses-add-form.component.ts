import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class AddressesAddFormComponent extends BaseFormComponent implements OnInit, AfterViewInit {

  @Input() address: any;

  @Output() readonly added = new EventEmitter<any>();

  constructor(private readonly logger: NGXLogger
            , private readonly translate: TranslateService
            , private readonly cdr: ChangeDetectorRef) {
    super('ADDRESS_ADD_FORM', 'models.address.');
    this.form.addControl('client', new FormControl('', [ Validators.required ]));
    this.form.addControl('name', new FormControl('', [ Validators.required ]));
    this.form.addControl('number', new FormControl('', [ ]));
    this.form.addControl('street', new FormControl('', [ Validators.required ]));
    this.form.addControl('postal_code', new FormControl('', [ ]));
    this.form.addControl('complement', new FormControl('', [ ]));
    this.form.addControl('city', new FormControl('', [ Validators.required ]));
    this.form.addControl('country', new FormControl('', [ Validators.required ]));
    this.form.addControl('telephone', new FormControl('', [ ]));
    this.form.addControl('restaurant_name', new FormControl('', [ ]));
    this.form.addControl('delivery', new FormControl('', [ ]));
    this.form.addControl('latitude', new FormControl('', [ ]));
    this.form.addControl('longitude', new FormControl('', [ ]));
    this.form.addControl('type', new FormControl('', [ ]));
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.address) {
      this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.address.id);
      this.form.get('client')
        .setValue(this.address.client);
      this.form.get('name')
        .setValue(this.address.name);
      this.form.get('number')
        .setValue(this.address.number);
      this.form.get('street')
        .setValue(this.address.street);
      this.form.get('postal_code')
        .setValue(this.address.postal_code);
      this.form.get('complement')
      .setValue(this.address.complement);
      this.form.get('city')
        .setValue(this.address.city);
      this.form.get('country')
      .setValue(this.address.country);
      this.form.get('telephone')
        .setValue(this.address.telephone);
      this.form.get('restaurant_name')
        .setValue(this.address.restaurant_name);
      this.form.get('delivery')
        .setValue(this.address.delivery);
      this.form.get('latitude')
        .setValue(this.address.latitude);
      this.form.get('longitude')
        .setValue(this.address.longitude);
      this.form.get('type')
        .setValue(this.address.type);
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
