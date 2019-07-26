// tslint:disable: no-implicit-dependencies
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { appRoutesNames } from '@app/app.routes.names';
import { MenuService } from '@app/services/menu/menu.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public routes = appRoutesNames;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private readonly breakpointObserver: BreakpointObserver
            , private readonly menuService: MenuService) { }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.menuService.toggle();
  }
}
