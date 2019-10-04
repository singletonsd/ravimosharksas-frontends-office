import { AfterViewInit, ChangeDetectorRef, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
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
        if (this.form.controls[i] instanceof FormArray) {
          const array = this.form.get(i) as FormArray;
          while (array.length !== 0) {
            array.removeAt(0);
          }
        }
        if (this.form.controls[i].enabled) {
          this.form.controls[i].reset();
          this.form.controls[i].clearValidators();
          this.form.controls[i].updateValueAndValidity();
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
