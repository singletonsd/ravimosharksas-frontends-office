import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
// import { StorageAddressesService } from './storage-addresses.service';
// import { StorageClientsService } from './storage-clients.service';
// import { StorageContractsService } from './storage-contracts.service';
import { StoragePiecesService } from './storage-pieces.service';
import { StorageTechniciansService } from './storage-technicians.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private SERVICE_NAME = 'SERVICE_STORAGE_MAIN';

  constructor(
              // private readonly addressStorage: StorageAddressesService,
            // private readonly clientStorage: StorageClientsService,
            // private readonly contractStorage: StorageContractsService,
            private readonly pieceStorage: StoragePiecesService,
            private readonly technicianStorage: StorageTechniciansService,
            private readonly logger: NGXLogger) {
  }

  public getCurrentUser(): string {
    return undefined;
  }

  public load(): Promise<boolean> {
    return new Promise(resolve => {
      const promises = [];
      // promises.push(this.addressStorage.refresh());
      // promises.push(this.clientStorage.refresh());
      // promises.push(this.contractStorage.refresh());
      promises.push(this.pieceStorage.refresh());
      promises.push(this.technicianStorage.refresh());
      Promise.all(promises)
        .then(() => {
        this.logger.info(`${this.SERVICE_NAME} - finished calls.`);
        resolve(true);
      }, error => {
        this.logger.error(`${this.SERVICE_NAME}`, error);
      });
    });
  }
}
