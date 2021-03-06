import { AfterViewInit, ChangeDetectorRef, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
// tslint:disable-next-line: no-implicit-dependencies
import { NotificationClass, NotificationStatus } from '@components/basics/notification/simple/notification-simple.class';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject } from 'rxjs';

export abstract class BaseFormAddComponent<T> implements AfterViewInit {

  @Input() item: T;
  @Output() readonly added = new EventEmitter<T>();

  public notification: NotificationClass = new NotificationClass();
  public form = new FormGroup({});
  public submitted = false;

  public loading = new BehaviorSubject<boolean>(false);
  public loading$ = this.loading.asObservable();

  public buttonSubmitDisabled = true;

  constructor(protected readonly COMPONENT_NAME: string
            , public readonly translationBase: string
            , private readonly cdr: ChangeDetectorRef
            , public readonly logger: NGXLogger
            , public readonly formRootName: string) {
  }

  private static resetField(control: AbstractControl): void {
    if (control.enabled) {
      control.reset();
      control.updateValueAndValidity();
    }
  }

  private static resetGroup(controls: FormGroup): void {
    for (const i in controls.controls) {
      if (controls.controls[i]) {
        if (controls.controls[i] instanceof FormGroup) {
          BaseFormAddComponent.resetGroup(controls.controls[i] as FormGroup);
        } else if (controls.controls[i] instanceof FormArray) {
          BaseFormAddComponent.resetArray(controls.controls[i] as FormArray);
        } else {
          BaseFormAddComponent.resetField(controls.controls[i]);
        }
      }
    }
  }

  private static resetArray(controls: FormArray): void {
    for (const element of controls.controls) {
      if (element instanceof FormGroup) {
        BaseFormAddComponent.resetGroup(element);
      } else {
        BaseFormAddComponent.resetField(element);
      }
    }
  }

  ngAfterViewInit(): void {
    this.form.statusChanges.subscribe(status => {
      this.buttonSubmitDisabled = status === 'INVALID' ? true : false;
    });
    this.buttonSubmitDisabled = this.form.invalid;
    this.cdr.detectChanges();
  }

  resetForm(): void {
    // this.form.reset();
    this.submitted = false;
    for (const i in this.form.controls) {
      if (this.form.controls[i]) {
        if (this.form.controls[i] instanceof FormGroup) {
          BaseFormAddComponent.resetGroup(this.form.controls[i] as FormGroup);
        } else if (this.form.controls[i] instanceof FormArray) {
          BaseFormAddComponent.resetArray(this.form.controls[i] as FormArray);
        } else if (this.form.controls[i] instanceof FormControl) {
          BaseFormAddComponent.resetField(this.form.controls[i]);
        }
      }
    }
    this.notification.state = NotificationStatus.READ;
    this.submitted = false;
    this.loading.next(false);
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    this.notification.state = NotificationStatus.READ;
    this.submitted = true;
    this.loading.next(true);
    this.finishSubmit();
  }
  protected abstract finishSubmit(): void;

  hasFieldError(fieldName: string): boolean {
    if (!this.form.controls[fieldName]) {
      return false;
    }

    return this.form.controls[fieldName].invalid && (this.form.controls[fieldName].touched);
  }

  finishAPICall(reset: boolean = true): void {
    this.submitted = false;
    this.loading.next(false);
    if (reset) {
      this.resetForm();
    }
  }

  formInitialized(value: {name: string, form: FormGroup}): void {
    if (value.name === this.formRootName) {
      this.form = value.form;
    } else {
      this.form.setControl(value.name, value.form);
    }
    this.logger.debug(this.COMPONENT_NAME, ` Added ${value.name}`);
    if (this.item) {
      this.fillForm(value.name);
    }
  }

  protected abstract fillForm(name: string): void;
}
