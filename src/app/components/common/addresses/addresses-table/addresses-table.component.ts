// tslint:disable: no-implicit-dependencies
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BaseTableComponent, ColumnDefinition } from '@app/models/base-table.class';
import { NGXLogger } from 'ngx-logger';
import { AddressesAddFormComponent } from '../addresses-add-form/addresses-add-form.component';
import { AddressesTableDataSource } from './addresses-table-data-source';

@Component({
  selector: 'app-addresses-table',
  templateUrl: './addresses-table.component.html',
  styleUrls: ['./addresses-table.component.scss']
})
export class AddressesTableComponent extends BaseTableComponent<any> implements OnInit {

  columns: Array<ColumnDefinition> = [
    { name: 'id', showOnMobile: true, showShort: true },
    { name: 'client', showOnMobile: true, showShort: true },
    { name: 'name', showOnMobile: false, showShort: true },
    { name: 'complete', showOnMobile: true, showShort: true },
    { name: 'telephone', showOnMobile: false, showShort: false },
    { name: 'complement', showOnMobile: false, showShort: false },
    { name: 'city', showOnMobile: false, showShort: false },
    { name: 'country', showOnMobile: false, showShort: false },
    { name: 'options', showOnMobile: true, showShort: true }
  ];

  constructor(logger: NGXLogger
            , private readonly dialog: MatDialog
            , breakpointObserver: BreakpointObserver) {
    super(logger, 'ADDRESSES_TABLE', breakpointObserver);
  }

  initComponent(): void {
    this.dataSource = new AddressesTableDataSource(this.paginator, this.sort, this.deleteSelector
      , this.logger, this.localData);
  }

  add(): void {
    this.logger.debug(this.COMPONENT_NAME, 'add new');
    const dialog = this.dialog.open(AddressesAddFormComponent, {
      panelClass: 'dialog-auto-scroll'
    });
    dialog.componentInstance.added.subscribe((newEntity: any) => {
      this.dataSource.addData(newEntity);
    });
  }

  export(): void {
    this.logger.debug(this.COMPONENT_NAME, 'export data');
    this.logger.debug('Exporting data to pdf...');
    // TODO: export data to a pdf file and download.
  }

}
