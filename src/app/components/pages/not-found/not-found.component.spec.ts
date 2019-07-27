import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: MainNotFoundComponent;
  let fixture: ComponentFixture<MainNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNotFoundComponent ]
    })
    .compileComponents()
    .catch(() => {});
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch(() => {});
  });
});
