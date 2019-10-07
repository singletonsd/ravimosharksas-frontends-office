import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { ImportedMachines, Locations } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-contracts-machine-panel',
  templateUrl: './contracts-machine-panel.component.html',
  styleUrls: ['./contracts-machine-panel.component.scss']
})
export class ContractsMachinePanelComponent extends BaseFormNewComponent<Array<ImportedMachines>> {

  public expansionStep = 0;

  constructor(logger: NGXLogger) {
    super('CONTRACT_MACHINES_PANEL_FORM', 'models.contract.', logger, 'importedMachines', new FormArray([]));
  }

  protected fillForm(): void {
  }

  identifyLocation(item: Locations): number {
    return item.id;
  }

  identifyImport(item: ImportedMachines): number {
    return item.id;
  }

  setStep(index: number): void {
    this.expansionStep = index;
  }

  nextStep(): void {
    this.expansionStep++;
  }

  prevStep(): void {
    this.expansionStep--;
  }

  protected afterControlAdded(): void {
  }
}
