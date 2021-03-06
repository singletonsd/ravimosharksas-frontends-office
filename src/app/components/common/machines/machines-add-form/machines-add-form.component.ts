import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// tslint:disable: no-implicit-dependencies
import { BaseFormAddComponent } from '@app/models/base-form-add.class';
import { environment } from '@env/environment';
import { Machines } from '@ravimosharksas/apis-contract-libs-typescript';
// import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-machines-add-form',
  templateUrl: './machines-add-form.component.html',
  styleUrls: ['./machines-add-form.component.scss']
})
export class MachinesAddFormComponent extends BaseFormAddComponent<Machines> implements OnInit {

  constructor(logger: NGXLogger
            // , private readonly translate: TranslateService
            , cdr: ChangeDetectorRef
            ) {
    super('MACHINES_ADD_FORM', 'models.machine.', cdr, logger, 'machine');
  }

  ngOnInit(): void {
    if (!this.item && !environment.production) {
      this.item = { id: 123123, serialNumber: '12312123', piece: { refArticle: '12345', name: 'C20'} };
      this.logger.info(this.COMPONENT_NAME, 'Added mock data', this.item);
    }
  }

  protected fillForm(): void {
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
