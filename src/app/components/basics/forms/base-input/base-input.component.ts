// tslint:disable: no-implicit-dependencies
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BaseFormComponent } from '@app/models/base-form.class';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss']
})
export class BaseInputComponent implements OnInit {

  @Input() parent: BaseFormComponent;
  @Input() controlName: string;
  @Input() placeHolder: string;
  @Input() type = 'text';
  @Input() error: string;
  @Input() errors: Array<string>;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.placeHolder) {
      this.placeHolder = this.parent.translationBase +  this.controlName;
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
