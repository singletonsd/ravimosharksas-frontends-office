// tslint:disable: no-implicit-dependencies
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Overlay } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BaseTableOptions } from '@app/components/basics/table/base-table-options/base-table-options.component';
import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddressesAddFormComponent } from '../../addresses-add-form/addresses-add-form.component';

@Component({
  selector: 'app-addresses-table-options',
  templateUrl: './addresses-table-options.component.html',
  styleUrls: ['./addresses-table-options.component.scss']
})
export class AddressesTableOptionsComponent implements OnInit , BaseTableOptions {

  private readonly COMPONENT_NAME = 'ADDRESSES_TABLE_OPTIONS';

  @Input() entity: any;

  disableButtonDelete = false;
  disableButtonAdd = false;
  disableButtonHistory = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private readonly dialog: MatDialog
            , private readonly snackBar: MatSnackBar
            , private readonly logger: NGXLogger
            , private readonly translate: TranslateService
            , private readonly overlay: Overlay
            , private readonly breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  edit(): void {
    this.logger.debug(this.COMPONENT_NAME, 'edit', this.entity.id);
    const dialog = this.dialog.open(AddressesAddFormComponent);
    dialog.componentInstance.address = this.entity;
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