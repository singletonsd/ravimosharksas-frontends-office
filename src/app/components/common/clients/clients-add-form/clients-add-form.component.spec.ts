import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAddFormComponent } from './clients-add-form.component';

describe('ClientsAddFormComponent', () => {
  let component: ClientsAddFormComponent;
  let fixture: ComponentFixture<ClientsAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsAddFormComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
