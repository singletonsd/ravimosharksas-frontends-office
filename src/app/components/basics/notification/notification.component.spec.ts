import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: BaseNotificationComponent;
  let fixture: ComponentFixture<BaseNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseNotificationComponent ]
    })
    .compileComponents()
    .catch(() => {});
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy()
    .catch(() => {});
  });
});
