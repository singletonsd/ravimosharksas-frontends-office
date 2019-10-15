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

  public refresh(): void {
    this.service.getAddresses(undefined, undefined, undefined, undefined, Deleted.ACTIVE)
      .subscribe(response => {
        this.items.next(response.items);
      });
  }
}
