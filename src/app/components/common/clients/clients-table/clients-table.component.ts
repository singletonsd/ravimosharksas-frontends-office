import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseTableComponent, ColumnDefinition } from '@app/models/base-table.class';
import { NGXLogger } from 'ngx-logger';
import { ClientsAddFormComponent } from '../clients-add-form/clients-add-form.component';
import { ClientsTableDataSource } from './clients-table-data-source';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent extends BaseTableComponent<any> implements OnInit {

  columns: Array<ColumnDefinition> = [
    { name: 'reference', showOnMobile: true, showShort: true },
    { name: 'nickname', showOnMobile: false, showShort: false },
    { name: 'name', showOnMobile: false, showShort: true },
    { name: 'surname', showOnMobile: false, showShort: true },
    { name: 'group', showOnMobile: false, showShort: false },
    { name: 'company_name', showOnMobile: true, showShort: false },
    { name: 'score', showOnMobile: false, showShort: false },
    { name: 'sector', showOnMobile: false, showShort: false },
    { name: 'email', showOnMobile: true, showShort: false },
    { name: 'forbidden', showOnMobile: true, showShort: true },
    { name: 'vat', showOnMobile: true, showShort: true },
    { name: 'options', showOnMobile: true, showShort: true }
  ];

  constructor(logger: NGXLogger
            , private readonly dialog: MatDialog
            , breakpointObserver: BreakpointObserver) {
    super(logger, 'CLIENTS_TABLE', breakpointObserver);
}

  initComponent(): void {
    this.dataSource = new ClientsTableDataSource(this.paginator, this.sort, this.deleteSelector
      , this.logger, this.localData);
  }

  add(): void {
    this.logger.debug(this.COMPONENT_NAME, 'add new');
    const dialog = this.dialog.open(ClientsAddFormComponent, {
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
