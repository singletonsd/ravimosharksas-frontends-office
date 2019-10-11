// tslint:disable: no-implicit-dependencies
import { MatPaginator, MatSelect, MatSort } from '@angular/material';
import { TableDataSourceBase } from '@app/models/base-table-source-data.class';
import { DeletedParameter } from '@app/models/deleted-parameter.class';
import { environment } from '@env/environment';
import { Contracts, ContractsService, Metadata, Reviewed, Valid } from '@ravimosharksas/apis-contract-libs-typescript';
// import { DeletedParameter } from '@app/models/deleted-parameter.class';
import { NGXLogger } from 'ngx-logger';

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */

declare var require: any;

export class ContractsTableDataSource extends TableDataSourceBase<Contracts> {

  constructor(paginator: MatPaginator, sort: MatSort
            , deletedOption: MatSelect, logger: NGXLogger
            , private readonly service: ContractsService) {
    super(paginator, sort, deletedOption, logger, 'TABLE_DATA_SOURCE_CONTRACTS');
  }

  loadApi(filter?: string, sortDirection?: string, skip?: number, limit?: number
        , deletedOption?: DeletedParameter): void {
    this.service.getContracts(skip, limit, sortDirection
      , filter, deletedOption, true, Valid.INVALID, Reviewed.UNREVIEWED)
      .subscribe((newData: { metadata: Metadata, items: Array<Contracts> }) => {
        console.log(newData);
        if (newData) {
          this.logger.debug(this.COMPONENT_NAME, 'got', newData.items.length);
          this.data.next(newData.items);
          this.paginator.length = newData.metadata.last;
        } else {
          this.logger.debug(this.COMPONENT_NAME, 'got nothing');
          this.data.next([]);
          this.paginator.length = 0;
        }
        this.loadingSubject.next(false);
      }, error => {
        console.log(error);
        this.loadingSubject.next(false);
      });
  }

  protected loadLocalJson(): void {
    if (!environment.production && environment.mockApiCalls) {
      this.logger.info(`${this.COMPONENT_NAME} loading mock data`);
      // tslint:disable-next-line:no-require-imports
      this.data.next(require('../../../../../../test/mock_data/contracts.json'));
      this.loadingSubject.next(false);
    }
  }
}
