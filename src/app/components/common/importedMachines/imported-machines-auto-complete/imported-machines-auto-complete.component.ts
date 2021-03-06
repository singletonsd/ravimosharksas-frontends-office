import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseAutocompleteComponent } from '@app/models/base-autocomplete';
import { ImportedMachines, ImportedMachinesService } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-imported-machines-auto-complete',
  templateUrl: './imported-machines-auto-complete.component.html',
  styleUrls: ['./imported-machines-auto-complete.component.scss']
})
export class ImportedMachinesAutoCompleteComponent extends BaseAutocompleteComponent<ImportedMachines>
implements OnInit {

constructor(private readonly pieceService: ImportedMachinesService,
            logger: NGXLogger) {
  super(logger, 'IMPORTED_MACHINES_AUTO_COMPLETE');
}

ngOnInit(): void {
  super.ngOnInit();
}

protected _filter(value: string): Array<ImportedMachines> {
  const filterValue = value.toLowerCase();
  let items = 0;

  return this.options.filter((option: ImportedMachines) => {
    if (items > this.maxResults) {
      return false;
    }
    if (option.identification && option.identification.toLowerCase()
        .includes(filterValue)) {
      items++;

      return true;
    }
    if (option.machine && option.machine.piece
        && option.machine.piece.refArticle && option.machine.piece.refArticle.toLowerCase()
      .includes(filterValue)) {
      items++;

      return true;
    }
  });
}

protected _apiCall(entity: any): import('rxjs').Observable<Array<ImportedMachines>> {
  return this.pieceService
    .getImportedMachines(0, 10, undefined, entity)
    .pipe(map(value => value ? value.items : []));
}

public identify(entity: ImportedMachines): string {
  return entity ? entity.id.toString() : undefined;
}

public displayFn(client?: ImportedMachines): string | undefined {
  return client ? `${client.identification}` : undefined;
}

}
