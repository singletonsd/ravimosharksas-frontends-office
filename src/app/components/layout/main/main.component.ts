import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { MenuService } from '@app/services/menu/menu.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private readonly breakpointObserver: BreakpointObserver
            , private readonly menuService: MenuService) {}

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.menuService.toggle();
  }

  isOpened(): Observable<boolean> {
    return this.menuService.$displaySideNav;
  }

}
