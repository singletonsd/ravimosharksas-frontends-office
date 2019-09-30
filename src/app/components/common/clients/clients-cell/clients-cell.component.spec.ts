import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCellComponent } from './clients-cell.component';

describe('ClientsCellComponent', () => {
  let component: ClientsCellComponent;
  let fixture: ComponentFixture<ClientsCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsCellComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
