import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsTableOptionsComponent } from './contracts-table-options.component';

describe('ContractsTableOptionsComponent', () => {
  let component: ContractsTableOptionsComponent;
  let fixture: ComponentFixture<ContractsTableOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsTableOptionsComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsTableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
