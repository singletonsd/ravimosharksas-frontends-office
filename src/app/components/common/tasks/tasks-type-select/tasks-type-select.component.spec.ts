import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTypeSelectComponent } from './tasks-type-select.component';

describe('TasksTypeSelectComponent', () => {
  let component: TasksTypeSelectComponent;
  let fixture: ComponentFixture<TasksTypeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksTypeSelectComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy()
      .catch();
  });
});
