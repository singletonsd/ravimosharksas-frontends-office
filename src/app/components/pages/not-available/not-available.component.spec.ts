import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAvailableComponent } from './not-available.component';

describe('NotAvailableComponent', () => {
  let component: NotAvailableComponent;
  let fixture: ComponentFixture<NotAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAvailableComponent ]
    })
    .compileComponents()
    .catch(() => {});
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch(() => {});
  });
});
