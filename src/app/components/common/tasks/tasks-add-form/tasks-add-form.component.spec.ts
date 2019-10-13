import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAddFormComponent } from './tasks-add-form.component';

describe('TasksAddFormComponent', () => {
  let component: TasksAddFormComponent;
  let fixture: ComponentFixture<TasksAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksAddFormComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
