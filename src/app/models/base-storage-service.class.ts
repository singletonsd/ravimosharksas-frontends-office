// tslint:disable-next-line:no-implicit-dependencies
import { environment } from '@env/environment';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject } from 'rxjs';

declare var require: any;
export abstract class BaseStorageService<T> {

  public items = new BehaviorSubject<Array<T>>([]);
  public items$ = this.items.asObservable();

  constructor(protected readonly SERVICE_NAME
            , protected readonly logger: NGXLogger
            , jsonFile?: string) {
    if (!environment.production && environment.mockApiCalls && jsonFile) {
      logger.debug(this.SERVICE_NAME, 'adding data from mock json...');
      // tslint:disable-next-line:no-require-imports
      this.items.next(require(`../../../test/mock_data/${jsonFile}.json`));
    } else {
      // this.refresh();
    }
  }

  protected abstract refresh(): void;
}
