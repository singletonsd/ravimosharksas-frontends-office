import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class BaseTableOptions<T> {

  @Input() entity: T;

  disableButtonDelete = false;
  disableButtonAdd = false;
  disableButtonHistory = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
    .pipe(
      map(result => result.matches)
    );

  constructor(private readonly breakpointObserver: BreakpointObserver
            , protected readonly COMPONENT_NAME: string) { }

}

export interface BaseTableOptionsInterface {
  edit(): void;
  disable(): void;
  enable(): void;
  historyShow(): void;
}
