import { Injectable } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseStorageService } from '@app/models/base-storage-service.class';
import { Contracts, ContractsService, Deleted } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class StorageContractsService extends BaseStorageService<Contracts> {

  constructor(private readonly service: ContractsService
            , logger: NGXLogger) {
    super('SERVICE_CONTRACTS', logger, 'contracts');
  }

  public refreshImp(): Promise<boolean> {
    return new Promise(resolve => {
      this.service.getContracts(undefined, undefined, undefined, undefined, Deleted.ACTIVE)
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
