import { Component, Input, OnInit } from '@angular/core';
import { NavOptions } from '../sidenav.menu';

@Component({
  selector: 'app-sidenav-subitem',
  templateUrl: './sidenav-subitem.component.html',
  styleUrls: ['./sidenav-subitem.component.css']
})
export class SidenavSubitemComponent implements OnInit {

  @Input() routes: Array<NavOptions>;
  @Input() itemName: string;
  @Input() opened: boolean;

  ngOnInit(): void {
  }

  identify(item: NavOptions): String {
    return item.title;
  }
}
