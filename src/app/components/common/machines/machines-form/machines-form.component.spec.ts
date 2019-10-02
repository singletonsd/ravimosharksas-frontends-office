import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesFormComponent } from './machines-form.component';

describe('MachinesFormComponent', () => {
  let component: MachinesFormComponent;
  let fixture: ComponentFixture<MachinesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesFormComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
