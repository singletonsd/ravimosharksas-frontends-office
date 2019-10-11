import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTasksMainComponent } from './pages-tasks-main.component';

describe('PagesTasksMainComponent', () => {
  let component: PagesTasksMainComponent;
  let fixture: ComponentFixture<PagesTasksMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesTasksMainComponent ]
    })
    .compileComponents()
    .catch();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesTasksMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch();
  });
});
