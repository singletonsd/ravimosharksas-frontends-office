import { Injectable } from '@angular/core';
// tslint:disable:no-implicit-dependencies
import { BaseStorageService } from '@app/models/base-storage-service.class';
import { Deleted, Technicians, TechniciansService } from '@ravimosharksas/apis-task-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class StorageTechniciansService extends BaseStorageService<Technicians> {

  constructor(private readonly service: TechniciansService
            , logger: NGXLogger) {
    super('SERVICE_TECHNICIANS', logger, 'technicians');
  }

  public refreshImp(): Promise<boolean> {
    return new Promise(resolve => {
      this.service.getTechnicians(undefined, undefined, undefined, undefined, Deleted.ACTIVE)
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
