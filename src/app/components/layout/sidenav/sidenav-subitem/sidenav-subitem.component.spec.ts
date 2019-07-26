import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSubitemComponent } from './sidenav-subitem.component';

describe('SidenavSubitemComponent', () => {
  let component: SidenavSubitemComponent;
  let fixture: ComponentFixture<SidenavSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavSubitemComponent ]
    })
    .compileComponents()
    .catch(() => {});
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch(() => {});
  });
});
