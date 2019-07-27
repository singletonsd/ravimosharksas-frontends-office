import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesAddFormComponent } from './addresses-add-form.component';

describe('AddressesAddFormComponent', () => {
  let component: AddressesAddFormComponent;
  let fixture: ComponentFixture<AddressesAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesAddFormComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
