import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedMachinesAddFormComponent } from './imported-machines-add-form.component';

describe('ImportedMachinesAddFormComponent', () => {
  let component: ImportedMachinesAddFormComponent;
  let fixture: ComponentFixture<ImportedMachinesAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportedMachinesAddFormComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportedMachinesAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
