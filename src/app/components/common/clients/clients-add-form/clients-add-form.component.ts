import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseFormComponent } from '@app/models/base-form.class';
// import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-clients-add-form',
  templateUrl: './clients-add-form.component.html',
  styleUrls: ['./clients-add-form.component.scss']
})
export class ClientsAddFormComponent extends BaseFormComponent implements OnInit, AfterViewInit {

  @Input() client: any;

  @Output() readonly added = new EventEmitter<any>();

  constructor(private readonly logger: NGXLogger
            // , private readonly translate: TranslateService
            // , private readonly cdr: ChangeDetectorRef
            ) {
    super('CLIENTS_ADD_FORM', 'models.client.');
    this.form.addControl('reference', new FormControl('', [ Validators.required ]));
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

  ngAfterViewInit(): void {
    if (this.client) {
      this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.client.id);
      this.form.get('reference')
        .setValue(this.client.reference);
      this.form.get('nickname')
      .setValue(this.client.nickname);
      this.form.get('name')
      .setValue(this.client.name);
      this.form.get('surname')
      .setValue(this.client.surname);
      this.form.get('group')
      .setValue(this.client.group);
      this.form.get('company_name')
      .setValue(this.client.company_name);
      this.form.get('score')
      .setValue(this.client.score);
      this.form.get('sector')
      .setValue(this.client.sector);
      this.form.get('email')
      .setValue(this.client.email);
      this.form.get('forbidden')
      .setValue(this.client.forbidden);
      this.form.get('vat')
      .setValue(this.client.vat);
    }
  }

  onSubmit(): void {
    super.onSubmit();
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;
    this.logger.debug(this.COMPONENT_NAME, 'form submitted.', data);
    if (this.client) {
      this.logger.debug(this.COMPONENT_NAME, 'edit', this.client);
      // const prevName = this.client.name;
      this.client.name = data;
      // this.addresssService.editaddress(this.client)
      // .subscribe(() => {
      //   this.translate.get('pages.client.results.success.edit')
      //     .subscribe(text => {
      //       this.notification.success(text);
      //       this.logger.debug(this.COMPONENT_NAME, 'success', this.client);
      //       this.finishAPICall(false);
      //     });
      // }, error => {
      //   const translate = (error && error.error && error.error.message ? error.error.message : 'fields.errors.unknown');
      //   this.client.name = prevName;
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
