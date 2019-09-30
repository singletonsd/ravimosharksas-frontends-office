import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesAddFormComponent } from './machines-add-form.component';

describe('MachinesAddFormComponent', () => {
  let component: MachinesAddFormComponent;
  let fixture: ComponentFixture<MachinesAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesAddFormComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
