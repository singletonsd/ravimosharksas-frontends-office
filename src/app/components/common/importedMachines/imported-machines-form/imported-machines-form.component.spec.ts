import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedMachinesFormComponent } from './imported-machines-form.component';

describe('ImportedMachinesFormComponent', () => {
  let component: ImportedMachinesFormComponent;
  let fixture: ComponentFixture<ImportedMachinesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportedMachinesFormComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportedMachinesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
