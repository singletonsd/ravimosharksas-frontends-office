import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniciansAutoCompleteComponent } from './technicians-auto-complete.component';

describe('TechniciansAutoCompleteComponent', () => {
  let component: TechniciansAutoCompleteComponent;
  let fixture: ComponentFixture<TechniciansAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechniciansAutoCompleteComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniciansAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
