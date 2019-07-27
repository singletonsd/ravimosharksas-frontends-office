// tslint:disable: no-implicit-dependencies
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelect } from '@angular/material';
import { DeletedParameter } from '@app/models/deleted-parameter.class';
import { GuardService } from '@app/services/guard/guard.service';

@Component({
  selector: 'app-base-table-toolbar',
  templateUrl: './base-table-toolbar.component.html',
  styleUrls: ['./base-table-toolbar.component.css']
})
export class BaseTableToolbarComponent implements OnInit {

  @Input() implementation: BaseTableToolbarInterface;
  @Input() selectedDeletedValue: DeletedParameter = DeletedParameter.NOT_DELETED;

  @ViewChild(MatSelect) readonly deleteSelector: MatSelect;
  public readonly deleteOptions: Array<DeletedParameter> = [ DeletedParameter.ALL, DeletedParameter.DELETED, DeletedParameter.NOT_DELETED];

  @ViewChild(MatPaginator) readonly paginator: MatPaginator;

  constructor(public readonly guard: GuardService) {
  }

  ngOnInit(): void {
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
}

export interface BaseTableToolbarInterface {
  add(): void;
  load(): void;
  export(): void;
}
