import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTableOptionsComponent } from './clients-table-options.component';

describe('ClientTableOptionsComponent', () => {
  let component: ClientsTableOptionsComponent;
  let fixture: ComponentFixture<ClientsTableOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsTableOptionsComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsTableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
