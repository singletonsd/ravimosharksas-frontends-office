import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsPanelImportedMachinesComponent } from './contracts-panel-imported-machines.component';

describe('ContractsPanelImportedMachinesComponent', () => {
  let component: ContractsPanelImportedMachinesComponent;
  let fixture: ComponentFixture<ContractsPanelImportedMachinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsPanelImportedMachinesComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsPanelImportedMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
