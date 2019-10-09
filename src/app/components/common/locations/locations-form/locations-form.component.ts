import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { Locations } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-locations-form',
  templateUrl: './locations-form.component.html',
  styleUrls: ['./locations-form.component.scss']
})
export class LocationsFormComponent extends BaseFormNewComponent<Locations> {

  @Input() showOnlyMachine = false;

  constructor(logger: NGXLogger) {
    super('LOCATIONS_FORM', 'models.location.', logger, 'location');
    this.form.addControl('id', new FormControl('', [ ]));
    this.form.addControl('contract', new FormControl('', [ Validators.required ]));
    this.form.get('id')
      .disable();
  }

  protected fillForm(): void {
    this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.id);
    this.form.get('id')
    .setValue(this.item.id);
    this.form.get('contract')
    .setValue(this.item.contract || this.item.refContract);
  }

  protected afterControlAdded(): void {
  }

}
