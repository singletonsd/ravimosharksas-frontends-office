import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseTableComponent, ColumnDefinition } from '@app/models/base-table.class';
import { Contracts } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';
import { ContractsAddFormComponent } from '../contracts-add-form/contracts-add-form.component';
import { ContractsTableDataSource } from './contracts-table-data-source';

@Component({
  selector: 'app-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.scss']
})
export class ContractsTableComponent  extends BaseTableComponent<Contracts> implements OnInit {

  columns: Array<ColumnDefinition> = [
    { name: 'reference', showOnMobile: true, showShort: true },
    { name: 'identification', showOnMobile: false, showShort: true },
    { name: 'client', showOnMobile: true, showShort: true },
    { name: 'dateDebut', showOnMobile: false, showShort: true },
    { name: 'dateFin', showOnMobile: false, showShort: true },
    { name: 'reconduction', showOnMobile: false, showShort: false },
    { name: 'loyer', showOnMobile: false, showShort: false },
    { name: 'miniconso', showOnMobile: false, showShort: false },
    { name: 'options', showOnMobile: true, showShort: true }
  ];

  constructor(logger: NGXLogger
            , private readonly dialog: MatDialog
            , breakpointObserver: BreakpointObserver) {
    super(logger, 'CONTRACTS_TABLE', breakpointObserver);
}

  initComponent(): void {
    this.dataSource = new ContractsTableDataSource(this.paginator, this.sort, this.deleteSelector
      , this.logger, this.localData);
  }

  add(): void {
    this.logger.debug(this.COMPONENT_NAME, 'add new');
    const dialog = this.dialog.open(ContractsAddFormComponent, {
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

  changeValidation(contract: Contracts): void {
    const newContract = {...contract};
    this.logger.debug(this.COMPONENT_NAME, 'changeValidation', contract.refContract, newContract);
    newContract.valid = !newContract.valid;
    newContract.reviewed = true;
    const dialog = this.dialog.open(ContractsAddFormComponent, {
      panelClass: 'dialog-auto-scroll'
    });
    dialog.componentInstance.added.subscribe((newEntity: any) => {
      Object.assign(contract, newEntity);
      this.dataSource.addData(newEntity);
    });
    dialog.componentInstance.contract = newContract;
  }
}
