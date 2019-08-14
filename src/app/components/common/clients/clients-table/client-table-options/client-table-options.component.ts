import { BreakpointObserver } from '@angular/cdk/layout';
// import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseTableOptions } from '@app/models/base-table-options.class';
// import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';
import { ClientsAddFormComponent } from '../../clients-add-form/clients-add-form.component';

@Component({
  selector: 'app-client-table-options',
  templateUrl: './client-table-options.component.html',
  styleUrls: ['./client-table-options.component.scss']
})
export class ClientTableOptionsComponent extends BaseTableOptions<any> implements OnInit {

  constructor(private readonly dialog: MatDialog
            // , private readonly snackBar: MatSnackBar
            , private readonly logger: NGXLogger
            // , private readonly translate: TranslateService
            // , private readonly overlay: Overlay
            , breakpointObserver: BreakpointObserver) {
    super(breakpointObserver, 'CLIENTS_TABLE_OPTIONS');
  }

  ngOnInit(): void {
  }

  edit(): void {
    this.logger.debug(this.COMPONENT_NAME, 'edit', this.entity.id);
    const dialog = this.dialog.open(ClientsAddFormComponent, {
      panelClass: 'dialog-auto-scroll'
    });
    dialog.componentInstance.client = this.entity;
  }

  disable(): void {
    this.logger.debug(this.COMPONENT_NAME, 'disable', this.entity.id);
    this.disableButtonAdd = true;
    this.entity.deleted = true;
    // this.accountService.editAccount(this.entity)
    //   .subscribe(() => {
    //     this.translate.get('pages.account.results.success.disabled')
    //     .subscribe((res: string) => {
    //       this.logger.debug(this.COMPONENT_NAME, 'disable success.');
    //       this.disableButtonAdd = false;
    //       this.snackBar.open(res.concat('', this.entity.id.toString()), undefined, { duration: 1000});
    //     });
    //   }, error => {
    //     this.entity.deleted = false;
    //     this.logger.debug(this.COMPONENT_NAME, 'disable error.', error);
    //     this.translate.get(error.error.message)
    //     .subscribe(res => {
    //         this.disableButtonAdd = false;
    //         this.snackBar.open(res, undefined, { duration: 1000});
    //     });
    //   });
  }

  enable(): void {
    this.logger.debug(this.COMPONENT_NAME, 'enable', this.entity.id);
    this.disableButtonAdd = true;
    this.entity.deleted = false;
    // this.accountService.editAccount(this.entity)
    //   .subscribe(() => {
    //     this.translate.get('pages.account.results.success.enabled')
    //     .subscribe((res: string) => {
    //       this.logger.debug(this.COMPONENT_NAME, 'enable success.');
    //       this.disableButtonAdd = false;
    //       this.snackBar.open(res.concat('', this.entity.id.toString()), undefined, { duration: 500});
    //     });
    //   }, error => {
    //     this.entity.deleted = true;
    //     this.logger.debug(this.COMPONENT_NAME, 'enable error.', error);
    //     this.translate.get(error.error.message)
    //     .subscribe(res => {
    //         this.disableButtonAdd = false;
    //         this.snackBar.open(res, undefined, { duration: 1000});
    //     });
    //   });
  }

  historyShow(): void {
    // TODO:
    this.logger.debug(this.COMPONENT_NAME, 'show history', this.entity.id);
  }

}
