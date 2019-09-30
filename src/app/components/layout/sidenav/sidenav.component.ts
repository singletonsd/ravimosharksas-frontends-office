import { Component } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { MenuService } from '@app/services/menu/menu.service';
import { Observable } from 'rxjs';
import { SIDE_NAV_MENU, NavMenu } from './sidenav.menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  public options = SIDE_NAV_MENU;

  constructor(private readonly menuService: MenuService) { }

  toggleSideNav(): void {
    this.menuService.toggleNames();
  }

  isOpened(): Observable<boolean> {
    return this.menuService.$displaySideNavNames;
  }

  identify(item: NavMenu): Number {
    return item.id;
  }
}
