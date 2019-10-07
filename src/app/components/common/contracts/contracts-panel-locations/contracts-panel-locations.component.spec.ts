import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsPanelLocationsComponent } from './contracts-panel-locations.component';

describe('ContractsPanelLocationsComponent', () => {
  let component: ContractsPanelLocationsComponent;
  let fixture: ComponentFixture<ContractsPanelLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsPanelLocationsComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsPanelLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
