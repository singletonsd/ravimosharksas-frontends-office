import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseAutocompleteComponent } from '@app/models/base-autocomplete';
import { Contracts, ContractsService } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contracts-auto-complete',
  templateUrl: './contracts-auto-complete.component.html',
  styleUrls: ['./contracts-auto-complete.component.scss']
})
export class ContractsAutoCompleteComponent extends BaseAutocompleteComponent<Contracts>
implements OnInit {

constructor(private readonly pieceService: ContractsService,
            logger: NGXLogger) {
  super(logger, 'CONTRACTS_AUTO_COMPLETE', 'contracts');
}

ngOnInit(): void {
  super.ngOnInit();
}

protected _filter(value: string): Array<Contracts> {
  const filterValue = value.toLowerCase();

  return this.options.filter((option: Contracts) => {
    if (option.identification && option.identification.toLowerCase()
        .includes(filterValue)
    ) {
      return true;
    }
    if (option.refContract && option.refContract.toString()
      .includes(filterValue)) {
      return true;
    }
  });
}

protected _apiCall(entity: any): import('rxjs').Observable<Array<Contracts>> {
  return this.pieceService
    .getContracts(0, 10, undefined, entity)
    .pipe(map(value => value.items));
}

public identify(entity: Contracts): string | undefined {
  return entity.refContract ? entity.refContract.toString() : undefined;
}

public displayFn(client?: Contracts | number): string | undefined {
  if (client) {
    return typeof client === 'number' ? client.toString() : `${client.refContract} - ${client.identification}`;
  }
}

}
