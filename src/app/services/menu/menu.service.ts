import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly displaySideNav = new BehaviorSubject<boolean>(true);
  public readonly $displaySideNav = this.displaySideNav.asObservable();

  private readonly displaySideNavNames = new BehaviorSubject<boolean>(true);
  public readonly $displaySideNavNames = this.displaySideNavNames.asObservable();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    // this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
    //   this.$displaySideNav.subscribe()
    // })
  }

  public show(): void {
    this.displaySideNav.next(true);
  }

  public hide(): void {
    this.displaySideNav.next(false);
  }

  public toggle(): void {
    this.displaySideNav.next(!this.displaySideNav.getValue());
  }

  public showNames(): void {
    this.displaySideNavNames.next(true);
  }

  public hideNames(): void {
    this.displaySideNavNames.next(false);
  }

  public toggleNames(): void {
    this.displaySideNavNames.next(!this.displaySideNavNames.getValue());
  }
}
