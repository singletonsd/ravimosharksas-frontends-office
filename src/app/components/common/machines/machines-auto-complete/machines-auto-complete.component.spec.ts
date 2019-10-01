import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesAutoCompleteComponent } from './machines-auto-complete.component';

describe('MachinesAutoCompleteComponent', () => {
  let component: MachinesAutoCompleteComponent;
  let fixture: ComponentFixture<MachinesAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesAutoCompleteComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
