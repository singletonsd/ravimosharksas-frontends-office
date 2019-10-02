import { EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';

export class BaseFormNewComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  public static emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  @Output() readonly formReady = new EventEmitter<FormGroup>();

  public form: FormGroup = new FormGroup({});

  constructor(protected readonly COMPONENT_NAME: string
            , public readonly translationBase: string) {
  }

  ngOnInit(): void {
    this.formReady.emit(this.form);
  }

  hasFieldError(fieldName: string): boolean {
    if (!this.form.controls[fieldName]) {
      return false;
    }

    return this.form.controls[fieldName].invalid && (this.form.controls[fieldName].touched);
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
