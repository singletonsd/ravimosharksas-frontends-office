import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsMachinePanelComponent } from './contracts-machine-panel.component';

describe('ContractsMachinePanelComponent', () => {
  let component: ContractsMachinePanelComponent;
  let fixture: ComponentFixture<ContractsMachinePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsMachinePanelComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsMachinePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
