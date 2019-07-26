import { Component, Input, OnInit } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { GuardService } from '@app/services/guard/guard.service';
import { NavMenu } from '../sidenav.menu';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.css']
})
export class SidenavItemComponent implements OnInit {

  @Input() option: NavMenu;
  @Input() opened: boolean;

  constructor(public guard: GuardService) { }

  ngOnInit(): void {
  }

}
