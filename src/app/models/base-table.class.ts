// tslint:disable: no-implicit-dependencies
import { AfterViewInit, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelect, MatSort } from '@angular/material';
// tslint:disable-next-line: max-line-length
import { BaseTableToolbarComponent, BaseTableToolbarInterface } from '@components/basics/table/base-table-toolbar/base-table-toolbar.component';
import { NGXLogger } from 'ngx-logger';
import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { TableDataSourceBase } from './base-table-source-data.class';
import { DeletedParameter } from './deleted-parameter.class';

export abstract class BaseTableComponent<T> implements OnInit, AfterViewInit, BaseTableToolbarInterface {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(BaseTableToolbarComponent) toolbar: BaseTableToolbarComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSelect) deleteSelector: MatSelect;

  @Input() pageIndex: number;
  @Input() pageSize: number;
  @Input() deletedOption: DeletedParameter;
  @Input() orderBy: string;
  @Input() orderType: 'asc' | 'desc';
  @Input() tableFilter: string;

  @Input() localData: Array<T>;

  public dataSource: TableDataSourceBase<T>;

  public readonly abstract displayedColumns: Array<string>;

  constructor(protected readonly logger: NGXLogger
            , protected readonly COMPONENT_NAME: string) {
  }

  ngOnInit(): void {
    this.paginator = this.toolbar.paginator;
    this.deleteSelector = this.toolbar.deleteSelector;
    if (this.pageIndex) {
      this.paginator.pageIndex = this.pageIndex;
    }
    if (this.pageSize) {
      this.paginator.pageSize = this.pageSize;
    }
    if (this.orderBy) {
      if (!this.orderType) {
        this.orderType = 'asc';
      }
      this.sort.sort({ id: this.orderBy, start: this.orderType, disableClear: false });
    }
    this.initComponent();
    this.dataSource.load(undefined, undefined, undefined, undefined, this.deletedOption);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page, this.deleteSelector.selectionChange)
      .pipe(tap(() => {
        this.load();
        // TODO: update query parameters.
        // this.router.navigate(['.'], { relativeTo: this.route, queryParams: { ...}});
      }))
      .subscribe();
      // TODO: add a filter.
    // fromEvent(this.input.nativeElement, 'keyup')
    //   .pipe(
    //     debounceTime(150),
    //     distinctUntilChanged(),
    //     tap(() => {
    //         this.paginator.pageIndex = 0;
    //         this.loadPage();
    //     })
    //   ).subscribe();
  }

  load(): void {
    this.logger.debug(this.COMPONENT_NAME, 'loading data');
    this.dataSource.load();
  }

  public abstract initComponent(): void;
  public abstract add(): void;
  public abstract export(): void;
}
