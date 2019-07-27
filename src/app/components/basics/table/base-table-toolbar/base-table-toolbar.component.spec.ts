import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTableToolbarComponent } from './base-table-toolbar.component';

describe('BaseTableToolbarComponent', () => {
  let component: BaseTableToolbarComponent;
  let fixture: ComponentFixture<BaseTableToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTableToolbarComponent ]
    })
    .compileComponents()
    .catch(() => {
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTableToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch(() => {
    });
  });
});
