import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseRouterTableOptions } from '@app/models/base-route-table-options.class';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-clients-main',
  templateUrl: './clients-main.component.html',
  styleUrls: ['./clients-main.component.scss']
})
export class ClientsMainComponent extends BaseRouterTableOptions<any> implements OnInit {

  constructor(logger: NGXLogger
            , route: ActivatedRoute) {
    super(logger, route, 'CLIENTS_MAIN');
  }

  ngOnInit(): void {
  }

}
