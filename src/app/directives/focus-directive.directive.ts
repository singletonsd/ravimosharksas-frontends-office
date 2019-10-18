import { AfterViewInit, Directive, ElementRef, Input, Renderer } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appFocusDirective]'
})
export class FocusDirectiveDirective implements AfterViewInit {

  @Input('appFocusDirective') isFocused: boolean | Observable<boolean>;

  constructor(private hostElement: ElementRef, private renderer: Renderer) {}

  ngAfterViewInit(): void {
    if (typeof this.isFocused === 'boolean') {
      if (this.isFocused) {
        this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus', []);
      }
    } else {
      this.isFocused.subscribe(value => {
        if (value) {
          this.renderer.invokeElementMethod(this.hostElement.nativeElement, 'focus', []);
        }
      });
    }
  }
}
