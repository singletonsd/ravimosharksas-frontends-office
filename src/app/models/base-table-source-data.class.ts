import { DataSource } from '@angular/cdk/table';
import { MatPaginator, MatSelect, MatSort } from '@angular/material';
// tslint:disable-next-line: no-implicit-dependencies
import { environment } from '@env/environment';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject, Observable } from 'rxjs';
import { DeletedParameter } from './deleted-parameter.class';

export abstract class TableDataSourceBase<T> extends DataSource<T> {

  protected readonly data: BehaviorSubject<Array<T>> = new BehaviorSubject<Array<T>>([]);
  protected readonly loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  protected data$ = this.data.asObservable();

  constructor(protected readonly paginator: MatPaginator
    ,         protected readonly sort: MatSort
    ,         protected readonly deletedOption: MatSelect
    ,         protected readonly logger: NGXLogger
    ,         protected readonly COMPONENT_NAME: string) {
    super();
    if (!paginator.pageIndex) {
      paginator.pageIndex = 0;
    }
    if (!paginator.pageSize) {
      paginator.pageSize = 20;
    }
    paginator.pageSizeOptions = [5, 10, 20, 50, 100];
  }

  connect(): Observable<Array<T>> {
    return this.data.asObservable();
  }

  disconnect(): void {
    this.data.complete();
    this.loadingSubject.complete();
  }

  protected abstract loadApi(filter?: string, sortDirection?: string
                          ,  skip?: number, limit?: number
                          ,  deletedOption?: DeletedParameter): void;

  // tslint:disable: no-parameter-reassignment
  public load(filter?: string, sortDirection?: string
            , skip?: number, limit?: number
            , deletedOption?: DeletedParameter): void {
    if (!skip) {
      skip = this.paginator.pageIndex * this.paginator.pageSize;
    }
    if (!limit) {
      limit = this.paginator.pageSize || this.paginator.pageSizeOptions[0];
    }
    if (!sortDirection && this.sort.active && this.sort.direction) {
      const object: any = new Object();
      object[this.sort.active] = this.sort.direction.toLocaleUpperCase();
      sortDirection = JSON.stringify(object);
    }
    if (!deletedOption) {
      const option: DeletedParameter = this.deletedOption.value;
      switch (option) {
        case 'ALL':
        case 'DELETED':
        case 'ACTIVE':
          deletedOption = this.deletedOption.value;
          break;
        default:
          deletedOption = 'ACTIVE';
          break;
      }
    }
    this.loadingSubject.next(true);
    if (!environment.production && environment.mockApiCalls) {
      this.logger.debug(this.COMPONENT_NAME, 'working with mock data');
      this.loadLocal();
    } else {
      this.logger.debug(this.COMPONENT_NAME, 'running load api data');
      this.loadApi(filter, sortDirection, skip, limit, deletedOption);
    }
  }

  public addData(user: T): void {
    this.data.next([...this.data.getValue(), user]);
  }

  public getData(): Array<T> {
    return this.data.getValue();
  }

  protected abstract loadLocalJson(): void;

  public loadLocal(
    // filter?: string, sortDirection?: string
    //             ,  skip?: number, limit?: number
    //             ,  deletedOption?: DeletedParameter
    ): void {
    this.logger.debug(this.COMPONENT_NAME, 'running load local data');
    this.loadLocalJson();
  }
  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  public getPagedData(data: Array<T>): Array<T> {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;

    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // protected getSortedData(data: Array<T>): Array<T> {
  //   if (!this.sort.active || this.sort.direction === '') {
  //     return data;
  //   }

  //   return data.sort((a, b) => {
  //     const isAsc = this.sort.direction === 'asc';
  //     // TODO: switch by object type.
  //     switch (this.sort.active) {
  //     //   case 'name': return this.compare(a.name, b.name, isAsc);
  //     //   case 'id': return this.compare(+a.id, +b.id, isAsc);
  //     //   case 'email': return this.compare(+a.email, +b.email, isAsc);
  //     //   case 'identification': return this.compare(+a.identification, +b.identification, isAsc);
  //     //   case 'role': return this.compare(+a.role, +b.role, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }

  /** Simple sort comparison for example ID/Name columns (for client-side sorting). */
  protected compare(a: any, b: any, isAsc: any): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
