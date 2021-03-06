// tslint:disable-next-line:ordered-imports
import { ChangeDetectorRef, Component, Input, AfterViewInit } from '@angular/core';
import { FormArray } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { Contracts, Locations } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-contracts-panel-locations',
  templateUrl: './contracts-panel-locations.component.html',
  styleUrls: ['./contracts-panel-locations.component.scss']
})
export class ContractsPanelLocationsComponent  extends BaseFormNewComponent<Array<Locations>>
  implements AfterViewInit {

  @Input() disableAddMachine = false;
  @Input() contract: Contracts;

  public expansionStep = 0;

  constructor(logger: NGXLogger
            , private readonly cdf: ChangeDetectorRef) {
    super('CONTRACTS_PANEL_LOCATIONS', 'models.contract.', logger, 'locations', new FormArray([]));
  }

  ngAfterViewInit(): void {
    this.cdf.detectChanges();
  }

  protected fillForm(): void {
  }

  identify(item: Locations): number {
    return item.id;
  }

  protected afterControlAdded(): void {
  }

  addMachine(click: Event): void {
    this.expanded = true;
    click.stopPropagation();
    this.item.push({ contract: this.contract, machine: { } });
    this.cdf.detectChanges();
  }

  deleteMachine(click: Event, index: number): void {
    click.stopPropagation();
    this.item.splice(index, 1);
    this.items.removeAt(index);
    this.cdf.detectChanges();
  }
}
