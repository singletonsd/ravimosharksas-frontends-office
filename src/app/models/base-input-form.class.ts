import { Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BaseFormNewComponent } from './base-form-new.class';

export class BaseInputFormComponent implements OnInit {

  @Input() parent: BaseFormNewComponent;
  @Input() controlName: string;
  @Input() placeHolder: string;
  @Input() translateHolder: string;
  @Input() type = 'text';
  @Input() error: string;
  @Input() errors: Array<string>;

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-conditional-expression
    if (this.translateHolder) {
      this.placeHolder = `${this.parent.translationBase} ${this.translateHolder}`;
    } else if (!this.placeHolder) {
      this.placeHolder = `${this.parent.translationBase} ${this.controlName}`;
    }
  }

  hasError(): boolean {
    return this.parent.hasFieldError(this.controlName);
  }

  getControls(): AbstractControl {
    return this.parent.form.controls[this.controlName];
  }

  hasNoControls(): boolean {
    return this.getControls() === undefined;
  }

  isRequiredError(): boolean {
    return this.getControls().errors.required !== undefined;
  }
}
