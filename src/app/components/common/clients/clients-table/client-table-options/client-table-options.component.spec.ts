import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTableOptionsComponent } from './client-table-options.component';

describe('ClientTableOptionsComponent', () => {
  let component: ClientTableOptionsComponent;
  let fixture: ComponentFixture<ClientTableOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTableOptionsComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
