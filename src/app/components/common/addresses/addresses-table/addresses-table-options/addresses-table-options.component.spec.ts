import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesTableOptionsComponent } from './addresses-table-options.component';

describe('AddressesTableOptionsComponent', () => {
  let component: AddressesTableOptionsComponent;
  let fixture: ComponentFixture<AddressesTableOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesTableOptionsComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesTableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
