import { Component, Input, OnInit } from '@angular/core';
import { ImportedMachines, Locations } from '@ravimosharksas/apis-contract-libs-typescript';

@Component({
  selector: 'app-contracts-machine-panel',
  templateUrl: './contracts-machine-panel.component.html',
  styleUrls: ['./contracts-machine-panel.component.scss']
})
export class ContractsMachinePanelComponent implements OnInit {

  @Input() locations: Array<Locations>;
  @Input() imports: Array<ImportedMachines>;

  ngOnInit(): void {
    console.log(this.locations);
    console.log(this.imports);
  }

  identifyLocation(item: Locations): number {
    return item.id;
  }

  identifyImport(item: ImportedMachines): number {
    return item.id;
  }
}
