// tslint:disable-next-line:no-implicit-dependencies
import { environment } from '@env/environment';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject } from 'rxjs';

declare var require: any;
export abstract class BaseStorageService<T> {

  public items = new BehaviorSubject<Array<T>>([]);
  public items$ = this.items.asObservable();

  workingLocal: boolean;

  constructor(protected readonly SERVICE_NAME
            , protected readonly logger: NGXLogger
            , jsonFile?: string) {
    if (!environment.production && environment.mockApiCalls && jsonFile) {
      logger.debug(this.SERVICE_NAME, 'adding data from mock json...');
      // tslint:disable-next-line:no-require-imports
      const data = require(`../../../test/mock_data/${jsonFile}.json`);
      if (data) {
        this.workingLocal = true;
        this.items.next(data);
      } else {
        this.workingLocal = false;
      }
    }
  }

  refresh(): Promise<boolean> {
    if (!this.workingLocal) {
      this.logger.info(`${this.SERVICE_NAME} - refreshing data`);

      return this.refreshImp();
    }

    return new Promise<boolean>(resolve => resolve(true));
  }

  protected abstract refreshImp(): Promise<boolean>;
}
