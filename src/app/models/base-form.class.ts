import { OnInit } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
// tslint:disable-next-line: no-implicit-dependencies
import { NotificationClass, NotificationStatus } from '@components/basics/notification/simple/notification-simple.class';
import { BehaviorSubject } from 'rxjs';

export class BaseFormComponent implements OnInit {

// tslint:disable-next-line: max-line-length
  public static emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  public notification: NotificationClass = new NotificationClass();
  public form: FormGroup;
  public submitted = false;

  public loading = new BehaviorSubject<boolean>(false);
  public loading$ = this.loading.asObservable();

  constructor(protected readonly COMPONENT_NAME: string) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
  }

  resetForm(): void {
    this.form.reset();
    this.submitted = false;
    for (const i in this.form.controls) {
      if (this.form.controls[i]) {
        this.form.controls[i].clearValidators();
        this.form.controls[i].updateValueAndValidity();
      }
    }
    this.notification.state = NotificationStatus.READ;
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    this.notification.state = NotificationStatus.READ;
    this.submitted = true;
    this.loading.next(true);
  }

  hasFieldError(fieldName: string): Boolean {
    if (!this.form.controls[fieldName]) {
      return false;
    }

    return this.form.controls[fieldName].invalid && (this.form.controls[fieldName].touched);
  }

  isValid(): Boolean {
    return this.form.valid && !this.loading.getValue();
  }

  finishAPICall(reset: boolean = true): void {
    this.submitted = false;
    this.loading.next(false);
    if (reset) {
      this.resetForm();
    }
  }
}
export const equalValueValidator = (targetKey: string, toMatchKey: string): ValidatorFn => {
  return (group: FormGroup): {[key: string]: any} => {
    const target = group.controls[targetKey];
    const toMatch = group.controls[toMatchKey];
    if (target.touched && toMatch.touched) {
      const isMatch = target.value === toMatch.value;
      // set equal value error on dirty controls
      if (!isMatch && target.valid && toMatch.valid) {
        toMatch.setErrors({equalValue: targetKey});
        const message = targetKey.concat(' != ', toMatchKey) ;

        return { equalValue: message};
      }
      if (isMatch && toMatch.hasError('equalValue')) {
        toMatch.setErrors(undefined);
      }
    }

    return undefined;
  };
};
