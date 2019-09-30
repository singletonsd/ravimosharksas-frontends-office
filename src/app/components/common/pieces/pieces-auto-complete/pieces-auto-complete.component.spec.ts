import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesAutoCompleteComponent } from './pieces-auto-complete.component';

describe('PiecesAutoCompleteComponent', () => {
  let component: PiecesAutoCompleteComponent;
  let fixture: ComponentFixture<PiecesAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecesAutoCompleteComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
