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

  @Input() account: any;

  @Output() readonly added = new EventEmitter<any>();

  constructor(private readonly logger: NGXLogger
            , private readonly translate: TranslateService) {
    super('ADDRESS_ADD_FORM');
    this.form.addControl('name', new FormControl('', [ Validators.required ]));
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    super.onSubmit();
    if (this.form.invalid) {
      return;
    }
    const data = this.form.get('name').value;
    this.logger.debug(this.COMPONENT_NAME, 'form submitted. Name:', data);
    if (this.account) {
      this.logger.debug(this.COMPONENT_NAME, 'edit', this.account);
      const prevName = this.account.name;
      this.account.name = data;
      // this.accountsService.editAccount(this.account)
      // .subscribe(() => {
      //   this.translate.get('pages.account.results.success.edit')
      //     .subscribe(text => {
      //       this.notification.success(text);
      //       this.logger.debug(this.COMPONENT_NAME, 'success', this.account);
      //       this.finishAPICall(false);
      //     });
      // }, error => {
      //   const translate = (error && error.error && error.error.message ? error.error.message : 'fields.errors.unknown');
      //   this.account.name = prevName;
      //   this.translate.get(translate)
      //     .subscribe(text => {
      //       this.notification.error(text);
      //       this.logger.warn(this.COMPONENT_NAME, 'An error occur', error);
      //       this.finishAPICall(false);
      //     });
      // });
    } else {
      this.logger.debug(this.COMPONENT_NAME, 'add');
      // this.accountsService.addAccount({ name: data })
      // .subscribe((newAccount: Accounts) => {
      //   this.translate.get('pages.account.results.success.add')
      //     .subscribe(text => {
      //       this.notification.success(text);
      //       this.logger.debug(this.COMPONENT_NAME, 'success', newAccount);
      //       this.added.next(newAccount);
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
