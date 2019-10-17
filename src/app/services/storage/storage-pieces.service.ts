import { Injectable } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseStorageService } from '@app/models/base-storage-service.class';
import { Deleted, Pieces, PiecesService } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class StoragePiecesService extends BaseStorageService<Pieces> {

  constructor(private readonly piecesService: PiecesService
            , logger: NGXLogger) {
    super('SERVICE_PIECES', logger, 'pieces');
  }

  public refreshImp(): Promise<boolean> {
    return new Promise(resolve => {
      this.piecesService.getPieces(undefined, undefined, undefined, undefined, Deleted.ACTIVE)
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
