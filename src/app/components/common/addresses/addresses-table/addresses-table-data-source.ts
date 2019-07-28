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
export class AddressesTableDataSource extends TableDataSourceBase<any> {

  constructor(paginator: MatPaginator, sort: MatSort
            , deletedOption: MatSelect, logger: NGXLogger
            , localData: Array<any>) {
    super(paginator, sort, deletedOption, logger, 'TABLE_DATA_SOURCE_ADDRESSES', localData);
  }

  loadApi(filter?: string, sortDirection?: string, skip?: number, limit?: number
        , deletedOption?: DeletedParameter): void {
           // tslint:disable: align
          this.data.next([
            { id: '5251', name: 'Livraison', client: 'C3435', number: '2', street: 'BISRUEDESTAILLANDIERS'
              , complement: '', postal_code: '75011', city: 'PARIS', country: 'France'
              , telephone: '', attendant: '.SCENE BASTILLE', type: '', delivery: ''
              , latitude: '', longitude: '' }
            , { id: '5252', name: 'Livraison', client: 'C3431', number: '10', street: 'OUVERTUREHCHEMAINDEFRANCEZON'
              ,  complement: 'Updated', postal_code: '30100', city: 'ALES', country: 'France'
              ,  telephone: '', attendant: 'BUFFALO GRILL ALES', type: '', delivery: ''
              ,  latitude: '44.127204', longitude: '4.083352'}
            , { id: '5253', name: 'Livraison', client: 'C3444', number: '121', street: 'SABGPPAVENUEDELEUROPE'
              ,  complement: 'Updated', postal_code: '62780', city: 'CUCQ LE TOUQUET', country: 'France'
              ,  telephone: '', attendant: 'BUFFALO GRILL CUCQ LE TOUQUET', type: '', delivery: ''
              ,  latitude: '50.521276', longitude: '1.590675'}
            , { id: '5254', name: 'Livraison', client: 'C3450', number: '3', street: 'RUESURCOUF'
              ,  complement: 'Updated', postal_code: '75007', city: 'PARIS', country: 'France'
              ,  telephone: '', attendant: '.G ET N', type: '', delivery: ''
              ,  latitude: '48.8620582', longitude: '2.3094447'}
            , { id: '5255', name: 'Livraison', client: 'C3453', number: '7', street: 'AVENUEMATIGNON'
            , complement: 'Updated', postal_code: '75008', city: 'PARIS', country: ''
            , telephone: '', attendant: 'BERKELEY RESTAURANT', type: '', delivery: ''
            , latitude: '48.8699566', longitude: '2.31143'}
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
