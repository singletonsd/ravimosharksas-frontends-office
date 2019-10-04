import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsReviewFormComponent } from './contracts-review-form.component';

describe('ContractsReviewFormComponent', () => {
  let component: ContractsReviewFormComponent;
  let fixture: ComponentFixture<ContractsReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsReviewFormComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
