import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsAutoCompleteComponent } from './contracts-auto-complete.component';

describe('ContractsAutoCompleteComponent', () => {
  let component: ContractsAutoCompleteComponent;
  let fixture: ComponentFixture<ContractsAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsAutoCompleteComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
