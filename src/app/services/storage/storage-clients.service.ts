import { Injectable } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseStorageService } from '@app/models/base-storage-service.class';
import { Clients, ClientsService, Deleted } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class StorageClientsService extends BaseStorageService<Clients> {

  constructor(private readonly service: ClientsService
            , logger: NGXLogger) {
    super('SERVICE_CLIENTS', logger, 'clients');
  }

  public refresh(): void {
    this.service.getClients(undefined, undefined, undefined, undefined, Deleted.ACTIVE)
      .subscribe(response => {
        this.items.next(response.items);
      });
  }
}
