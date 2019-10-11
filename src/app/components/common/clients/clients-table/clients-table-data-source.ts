// tslint:disable: no-implicit-dependencies
import { MatPaginator, MatSelect, MatSort } from '@angular/material';
import { TableDataSourceBase } from '@app/models/base-table-source-data.class';
import { environment } from '@env/environment';
// import { DeletedParameter } from '@app/models/deleted-parameter.class';
import { NGXLogger } from 'ngx-logger';

declare var require: any;

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ClientsTableDataSource extends TableDataSourceBase<any> {

  constructor(paginator: MatPaginator, sort: MatSort
            , deletedOption: MatSelect, logger: NGXLogger) {
    super(paginator, sort, deletedOption, logger, 'TABLE_DATA_SOURCE_CLIENTS');
  }

  loadApi(
    // filter?: string, sortDirection?: string, skip?: number, limit?: number
    //     , deletedOption?: DeletedParameter
        ): void {
           // tslint:disable: align
          //  TODO: change data to real client information.
    // this.accountsService.getAccounts(skip, limit, sortDirection
    //   , filter, deletedOption, true)
    //   .subscribe((newData: { metadata: Metadata, items: Array<Accounts> }) => {
    //     if (newData) {
    //       this.logger.debug(this.COMPONENT_NAME, 'got', newData.items.length);
    //       this.data.next(newData.items);
    //       this.paginator.length = newData.metadata.last;
    //     } else {
    //       this.logger.debug(this.COMPONENT_NAME, 'got nothing');
    //       this.data.next([]);
    //       this.paginator.length = 0;
    //     }
    //     this.loadingSubject.next(false);
    //   });
  }

  protected loadLocalJson(): void {
    if (!environment.production && environment.mockApiCalls) {
      this.logger.info(`${this.COMPONENT_NAME} loading mock data`);
      // tslint:disable-next-line:no-require-imports
      const data = require('../../../../../../test/mock_data/clients.json');
      if (data) {
        this.data.next(data);
      }
      this.loadingSubject.next(false);
    }
  }
}
