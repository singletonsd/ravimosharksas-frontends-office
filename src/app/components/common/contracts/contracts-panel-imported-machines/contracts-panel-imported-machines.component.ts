import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { ImportedMachines } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-contracts-panel-imported-machines',
  templateUrl: './contracts-panel-imported-machines.component.html',
  styleUrls: ['./contracts-panel-imported-machines.component.scss']
})
export class ContractsPanelImportedMachinesComponent extends BaseFormNewComponent<Array<ImportedMachines>> {

  public expansionStep = 0;

  constructor(logger: NGXLogger) {
    super('CONTRACTS_PANEL_IMPORTED_MACHINES', 'models.contract.', logger, 'importedMachines', new FormArray([]));
  }

  protected fillForm(): void {
    this.expansionMax = this.item.length - 1;
  }

  identify(item: ImportedMachines): number {
    return item.id;
  }

  protected afterControlAdded(value: {form: FormGroup, name: string}): void {
    value.form.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.nextStep();
      }
    });
  }

  public lastItem(): void {
    this.expanded = false;
  }
}
