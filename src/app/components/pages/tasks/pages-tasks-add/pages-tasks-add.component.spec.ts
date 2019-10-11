import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTasksAddComponent } from './pages-tasks-add.component';

describe('PagesTasksAddComponent', () => {
  let component: PagesTasksAddComponent;
  let fixture: ComponentFixture<PagesTasksAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesTasksAddComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesTasksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
