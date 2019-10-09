import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// tslint:disable-next-line: no-implicit-dependencies
import { MenuService } from '@app/services/menu/menu.service';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
    .pipe(
      map(result => result.matches)
    );

  constructor(private readonly breakpointObserver: BreakpointObserver
            , public readonly menuService: MenuService
            , router: Router) {
    router.events.pipe(
      withLatestFrom(this.isHandset$),
      filter(([a, b]) => b && a instanceof NavigationEnd))
      .subscribe(() => {
        this.menuService.hide();
      });
  }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.menuService.toggle();
  }

}
