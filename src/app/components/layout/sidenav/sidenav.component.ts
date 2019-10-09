import { Component } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { MenuService } from '@app/services/menu/menu.service';
import { NavMenu, SIDE_NAV_MENU } from './sidenav.menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  public options = SIDE_NAV_MENU;

  constructor(public readonly menuService: MenuService) { }

  toggleSideNav(): void {
    this.menuService.toggleNames();
  }

  identify(item: NavMenu): Number {
    return item.id;
  }
}
