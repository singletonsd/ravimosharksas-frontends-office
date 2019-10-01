import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseAutocompleteComponent } from '@app/models/base-autocomplete';
import { Machines, MachinesService } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-machines-auto-complete',
  templateUrl: './machines-auto-complete.component.html',
  styleUrls: ['./machines-auto-complete.component.scss']
})
export class MachinesAutoCompleteComponent extends BaseAutocompleteComponent<Machines>
implements OnInit {

constructor(private readonly pieceService: MachinesService,
            logger: NGXLogger) {
  super(logger, 'MACHINE_AUTO_COMPLETE');
}

ngOnInit(): void {
  super.ngOnInit();
}

protected _filter(value: string): Array<Machines> {
  const filterValue = value.toLowerCase();

  return this.options.filter((option: Machines) => {
    if (option.refArticle && option.refArticle.toLowerCase()
        .includes(filterValue)
    ) {
      return true;
    }
    if (option.numSerie && option.refArticle.toLowerCase()
        .includes(filterValue)
    ) {
      return true;
    }
    if (option.piece && option.piece.refArticle && option.piece.refArticle.toLowerCase()
      .includes(filterValue)) {
      return true;
    }
  });
}

protected _apiCall(entity: any): import('rxjs').Observable<Array<Machines>> {
  return this.pieceService
    .getMachines(0, 10, undefined, entity)
    .pipe(map(value => value.items));
}

public identify(entity: Machines): string {
  return entity.refArticle;
}

public displayFn(entity?: Machines): string | undefined {
  if (!entity) {
    return undefined;
  }

  return entity.piece ? `${entity.piece.name} - ${entity.numSerie}` : `${entity.refArticle} - ${entity.numSerie}`;
}

}
