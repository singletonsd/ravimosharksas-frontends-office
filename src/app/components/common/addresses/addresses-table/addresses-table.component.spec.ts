import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesTableComponent } from './addresses-table.component';

describe('AddressesTableComponent', () => {
  let component: AddressesTableComponent;
  let fixture: ComponentFixture<AddressesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesTableComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
