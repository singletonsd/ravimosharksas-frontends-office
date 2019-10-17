import { Injectable } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseStorageService } from '@app/models/base-storage-service.class';
import { Clients, ClientsService, Deleted } from '@ravimosharksas/apis-client-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class StorageClientsService extends BaseStorageService<Clients> {

  constructor(private readonly service: ClientsService
            , logger: NGXLogger) {
    super('SERVICE_CLIENTS', logger, 'clients');
  }

  public refreshImp(): Promise<boolean> {
    return new Promise(resolve => {
      this.service.getClients(undefined, undefined, undefined, undefined, Deleted.ACTIVE)
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
