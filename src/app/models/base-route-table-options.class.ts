import { ActivatedRoute } from '@angular/router';
import { Contracts } from '@ravimosharksas/apis-contract-libs-typescript';
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
        case 'ACTIVE':
          this.deletedOption = params['deletedOption'];
          break;
        default:
          this.deletedOption = 'ACTIVE';
          break;
      }
      this.tableFilter = params['filter'];
      if (!params['orderBy'] || !params['orderType']) {
        return;
      }
      this.logger.debug(this.COMPONENT_NAME, this.tableObjectType, params['orderBy']);
      if (this.tableObjectType as Contracts) {
        switch (params['orderBy']) {
          case 'client':
          case 'refContract':
          case 'refClient':
          case 'identification':
            this.orderBy = params['orderBy'];
            break;
          default:
            this.orderBy = 'refContract';
            break;
        }
      } else {
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
            this.orderBy = 'id';
            break;
        }
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
    });
  }
}
