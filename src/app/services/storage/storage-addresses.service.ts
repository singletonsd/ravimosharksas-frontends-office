import { Injectable } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseStorageService } from '@app/models/base-storage-service.class';
import { Addresses, AddressesService, Deleted } from '@ravimosharksas/apis-client-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class StorageAddressesService  extends BaseStorageService<Addresses> {

  constructor(private readonly service: AddressesService
            , logger: NGXLogger) {
    super('SERVICE_ADDRESSES', logger, 'clients');
  }

  public refreshImp(): Promise<boolean> {
    return new Promise(resolve => {
      this.service.getAddresses(undefined, undefined, undefined, undefined, Deleted.ACTIVE)
        .subscribe(response => {
          this.logger.info(`${this.SERVICE_NAME} - got`,  response.items.length);
          this.logger.debug(`${this.SERVICE_NAME} - got`,  response);
          this.items.next(response.items);
          resolve(true);
        }, error => {
          this.logger.error(`${this.SERVICE_NAME} - error`,  error);
          resolve(false);
        });
    });
  }
}
