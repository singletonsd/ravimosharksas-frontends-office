import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseRouterTableOptions } from '@app/models/base-route-table-options.class';
import { Contracts } from '@ravimosharksas/apis-global-libs-angular';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-contracts-main',
  templateUrl: './contracts-main.component.html',
  styleUrls: ['./contracts-main.component.scss']
})
export class ContractsMainComponent extends BaseRouterTableOptions<Contracts> implements OnInit {

  constructor(logger: NGXLogger
            , route: ActivatedRoute) {
    super(logger, route, 'CLIENTS_MAIN');
}

  ngOnInit(): void {
  }

}
