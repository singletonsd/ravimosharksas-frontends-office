import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsTableToolbarComponent } from './contracts-table-toolbar.component';

describe('ContractsTableToolbarComponent', () => {
  let component: ContractsTableToolbarComponent;
  let fixture: ComponentFixture<ContractsTableToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsTableToolbarComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsTableToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
