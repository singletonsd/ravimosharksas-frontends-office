import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly displaySideNav = new BehaviorSubject<boolean>(false);
  public readonly $displaySideNav = this.displaySideNav.asObservable();

  private readonly displaySideNavNames = new BehaviorSubject<boolean>(true);
  public readonly $displaySideNavNames = this.displaySideNavNames.asObservable();

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .subscribe(result => {
        this.displaySideNav.next(!result.matches);
    });
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
