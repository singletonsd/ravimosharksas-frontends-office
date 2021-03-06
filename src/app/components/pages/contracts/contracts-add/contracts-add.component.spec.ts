import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsAddComponent } from './contracts-add.component';

describe('ContractsAddComponent', () => {
  let component: ContractsAddComponent;
  let fixture: ComponentFixture<ContractsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsAddComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
