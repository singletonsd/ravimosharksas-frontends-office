import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsAddFormComponent } from './contracts-add-form.component';

describe('ContractsAddFormComponent', () => {
  let component: ContractsAddFormComponent;
  let fixture: ComponentFixture<ContractsAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsAddFormComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
