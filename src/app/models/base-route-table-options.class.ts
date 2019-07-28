import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { DeletedParameter } from './deleted-parameter.class';

export class BaseRouterTableOptions<T> {

  public pageIndex: number;
  public pageSize: number;
  public deletedOption: DeletedParameter;
  public orderBy: string;
  public orderType: 'asc' | 'desc';
  public tableFilter: string;

  private readonly tableObjectType: T;

  constructor(protected readonly logger: NGXLogger
            , route: ActivatedRoute
            , protected readonly COMPONENT_NAME: string) {
    route.queryParams.subscribe(params => {
      this.pageIndex = params['pageIndex'];
      this.pageSize = params['pageSize'];
      const deleteOption: DeletedParameter = params['deletedOption'];
      switch (deleteOption) {
        case 'ALL':
        case 'DELETED':
        case 'NOT_DELETED':
          this.deletedOption = params['deletedOption'];
          break;
        default:
          this.deletedOption = 'NOT_DELETED';
          break;
      }
      switch (params['orderBy']) {

        // TODO: check this value by parameters of the tableObjectType.
        case 'id':
        case 'Type':
        case 'Name':
        case 'Identification':
        case 'Email':
          this.orderBy = params['orderBy'];
          break;
        default:
          this.orderBy = 'Name';
          break;
      }
      switch (params['orderType']) {
        case 'asc':
        case 'desc':
          this.orderType = params['orderType'];
          break;
        default:
          this.orderType = 'asc';
          break;
      }
      this.tableFilter = params['filter'];
    });
  }
}
