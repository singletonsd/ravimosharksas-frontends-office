import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsFormComponent } from './contracts-form.component';

describe('ContractFormComponent', () => {
  let component: ContractsFormComponent;
  let fixture: ComponentFixture<ContractsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsFormComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
