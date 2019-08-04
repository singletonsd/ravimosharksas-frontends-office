// tslint:disable: no-implicit-dependencies
import { Component, Input, OnInit } from '@angular/core';
import { BaseTableOptionsInterface } from '@app/models/base-table-options.class';
import { GuardService } from '@app/services/guard/guard.service';

@Component({
  selector: 'app-base-table-options',
  templateUrl: './base-table-options.component.html',
  styleUrls: ['./base-table-options.component.css']
})
export class BaseTableOptionsComponent<T> implements OnInit {

  @Input() entity: T;
  @Input() implementation: BaseTableOptionsInterface;

  @Input() disableButtonDelete = false;
  @Input() disableButtonAdd = false;
  @Input() disableButtonHistory = true;

  constructor(public readonly guard: GuardService) { }

  ngOnInit(): void {
  }

}
