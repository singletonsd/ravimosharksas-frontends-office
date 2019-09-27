import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTableOptionsComponent } from './contract-table-options.component';

describe('ContractTableOptionsComponent', () => {
  let component: ContractTableOptionsComponent;
  let fixture: ComponentFixture<ContractTableOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractTableOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractTableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
