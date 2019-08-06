// tslint:disable: no-implicit-dependencies
import { MatPaginator, MatSelect, MatSort } from '@angular/material';
import { TableDataSourceBase } from '@app/models/base-table-source-data.class';
import { DeletedParameter } from '@app/models/deleted-parameter.class';
import { NGXLogger } from 'ngx-logger';

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ClientsTableDataSource extends TableDataSourceBase<any> {

  constructor(paginator: MatPaginator, sort: MatSort
            , deletedOption: MatSelect, logger: NGXLogger
            , localData: Array<any>) {
    super(paginator, sort, deletedOption, logger, 'TABLE_DATA_SOURCE_CLIENTS', localData);
  }

  loadApi(filter?: string, sortDirection?: string, skip?: number, limit?: number
        , deletedOption?: DeletedParameter): void {
           // tslint:disable: align
          //  TODO: change data to real client information.
          this.data.next([
            { reference: '', nickname: '', name: '', surname: ''
            , group: '', company_name: '', score: '', sector: ''
            , email: '', forbidden: true, vat: '' },
            { reference: '', nickname: '', name: '', surname: ''
            , group: '', company_name: '', score: '', sector: ''
            , email: '', forbidden: false, vat: '' },
            { reference: '', nickname: '', name: '', surname: ''
            , group: '', company_name: '', score: '', sector: ''
            , email: '', forbidden: true, vat: '' },
            { reference: '', nickname: '', name: '', surname: ''
            , group: '', company_name: '', score: '', sector: ''
            , email: '', forbidden: false, vat: '' },
            { reference: '', nickname: '', name: '', surname: ''
            , group: '', company_name: '', score: '', sector: ''
            , email: '', forbidden: true, vat: '' },
            { reference: '', nickname: '', name: '', surname: ''
            , group: '', company_name: '', score: '', sector: ''
            , email: '', forbidden: false, vat: '' }
          ]);
          this.loadingSubject.next(false);
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
}
