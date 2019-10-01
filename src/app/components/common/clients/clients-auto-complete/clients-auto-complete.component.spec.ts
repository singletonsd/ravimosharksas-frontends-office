import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAutocompleteComponent } from './clients-auto-complete.component';

describe('ClientsAutocompleteComponent', () => {
  let component: ClientsAutocompleteComponent;
  let fixture: ComponentFixture<ClientsAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsAutocompleteComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
