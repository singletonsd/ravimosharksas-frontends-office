import { Input } from '@angular/core';

export abstract class BaseExpandedClass {

  @Input() public expanded = true;
  public expansionStep = 0;
  public expansionMax;

  setStep(index: number): void {
    this.expansionStep = index;
  }

  nextStep(): void {
    if (this.expansionStep < this.expansionMax) {
      this.expansionStep++;
    } else {
      this.lastItem();
    }
  }

  prevStep(): void {
    if (this.expansionStep !== 0) {
      this.expansionStep--;
    }
  }

  abstract lastItem(): void;
}
