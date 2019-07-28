// tslint:disable: no-implicit-dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseRouterTableOptions } from '@app/models/base-route-table-options.class';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-addresses-main',
  templateUrl: './addresses-main.component.html',
  styleUrls: ['./addresses-main.component.scss']
})

export class AddressesMainComponent extends BaseRouterTableOptions<any> implements OnInit {

  constructor(logger: NGXLogger
            , route: ActivatedRoute) {
    super(logger, route, 'ADDRESSES_MAIN');
}

  ngOnInit(): void {
  }

}
