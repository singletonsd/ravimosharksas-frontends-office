import { Component, OnInit } from '@angular/core';
// tslint:disable:no-implicit-dependencies
import { BaseAutocompleteComponent } from '@app/models/base-autocomplete';
import { StorageContractsService } from '@app/services/storage/storage-contracts.service';
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

  constructor(private readonly pieceService: ContractsService
            , logger: NGXLogger
            , storageService: StorageContractsService) {
    super(logger, 'CONTRACTS_AUTO_COMPLETE', storageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  protected _filter(value: string): Array<Contracts> {
    const filterValue = value.toLowerCase();
    let items = 0;

    return this.options.filter((option: Contracts) => {
      if (items > this.maxResults) {
        return false;
      }
      if (option.identification && option.identification.toLowerCase()
          .includes(filterValue)) {
        items++;

        return true;
      }
      if (option.refContract && option.refContract.toString()
        .includes(filterValue)) {
        items++;

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
