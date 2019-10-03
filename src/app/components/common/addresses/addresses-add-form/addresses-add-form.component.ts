import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseFormAddComponent } from '@app/models/base-form-add.class';
// import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-addresses-add-form',
  templateUrl: './addresses-add-form.component.html',
  styleUrls: ['./addresses-add-form.component.scss']
})
export class AddressesAddFormComponent extends BaseFormAddComponent<any> implements OnInit {

  constructor(logger: NGXLogger
            // , private readonly translate: TranslateService
            , cdr: ChangeDetectorRef) {
    super('ADDRESS_ADD_FORM', 'models.address.', cdr, logger, 'address');
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

  fillForm(): void {
    this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.id);
    this.form.get('client')
      .setValue(this.item.client);
    this.form.get('name')
      .setValue(this.item.name);
    this.form.get('number')
      .setValue(this.item.number);
    this.form.get('street')
      .setValue(this.item.street);
    this.form.get('postal_code')
      .setValue(this.item.postal_code);
    this.form.get('complement')
    .setValue(this.item.complement);
    this.form.get('city')
      .setValue(this.item.city);
    this.form.get('country')
    .setValue(this.item.country);
    this.form.get('telephone')
      .setValue(this.item.telephone);
    this.form.get('restaurant_name')
      .setValue(this.item.restaurant_name);
    this.form.get('delivery')
      .setValue(this.item.delivery);
    this.form.get('latitude')
      .setValue(this.item.latitude);
    this.form.get('longitude')
      .setValue(this.item.longitude);
    this.form.get('type')
      .setValue(this.item.type);
  }

  finishSubmit(): void {
    const data = this.form.value;
    this.logger.debug(this.COMPONENT_NAME, 'form submitted.', data);
    if (this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'edit', this.item);
      // const prevName = this.item.name;
      this.item.name = data;
      // this.addresssService.editaddress(this.item)
      // .subscribe(() => {
      //   this.translate.get('pages.address.results.success.edit')
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
