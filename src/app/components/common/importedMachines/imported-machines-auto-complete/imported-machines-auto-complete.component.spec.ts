import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedMachinesAutoCompleteComponent } from './imported-machines-auto-complete.component';

describe('ImportedMachinesAutoCompleteComponent', () => {
  let component: ImportedMachinesAutoCompleteComponent;
  let fixture: ComponentFixture<ImportedMachinesAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportedMachinesAutoCompleteComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportedMachinesAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
