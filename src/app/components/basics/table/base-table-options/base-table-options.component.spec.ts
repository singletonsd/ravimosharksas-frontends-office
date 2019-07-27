import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTableOptionsComponent } from './base-table-options.component';

describe('BaseTableOptionsComponent', () => {
  let component: BaseTableOptionsComponent<any>;
  let fixture: ComponentFixture<BaseTableOptionsComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTableOptionsComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
