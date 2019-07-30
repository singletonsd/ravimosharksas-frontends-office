// tslint:disable: no-implicit-dependencies
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelect } from '@angular/material';
import { DeletedParameter } from '@app/models/deleted-parameter.class';
import { GuardService } from '@app/services/guard/guard.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-base-table-toolbar',
  templateUrl: './base-table-toolbar.component.html',
  styleUrls: ['./base-table-toolbar.component.css']
})
export class BaseTableToolbarComponent implements OnInit {

  @Input() implementation: BaseTableToolbarInterface;
  @Input() selectedDeletedValue: DeletedParameter = 'NOT_DELETED';

  @ViewChild(MatSelect) readonly deleteSelector: MatSelect;
  public readonly deleteOptions: Array<DeletedParameter> = [ 'ALL', 'DELETED', 'NOT_DELETED'];

  @ViewChild(MatPaginator) readonly paginator: MatPaginator;

  shortColumns = new BehaviorSubject<boolean>(false);
  $shortColumns = this.shortColumns.asObservable();

  constructor(public readonly guard: GuardService
            , private readonly breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .subscribe(result => {
        this.shortColumns.next(result.matches);
        if (result.matches) {
          this.implementation.showLessColumns();
        } else {
          this.implementation.showAllColumns();
        }
      });
  }

  add(): void {
    this.implementation.add();
  }

  load(): void {
    this.implementation.load();
  }

  export(): void {
    this.implementation.export();
  }

  showMore(): void {
    this.implementation.showAllColumns();
    this.shortColumns.next(false);
  }

  showLess(): void {
    this.implementation.showLessColumns();
    this.shortColumns.next(true);
  }
}

export interface BaseTableToolbarInterface {
  add(): void;
  load(): void;
  export(): void;
  showAllColumns(): void;
  showLessColumns(): void;
}
