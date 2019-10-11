import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesAutoCompleteComponent } from './addresses-auto-complete.component';

describe('AddressesAutoCompleteComponent', () => {
  let component: AddressesAutoCompleteComponent;
  let fixture: ComponentFixture<AddressesAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesAutoCompleteComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy()
      .catch();
  });
});
