import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss']
})
export class BaseInputComponent implements OnInit {

  @Input() controlName: string;
  @Input() placeHolder: string = this.controlName;
  @Input() type = 'text';
  @Input() errorField: string = this.controlName;
  @Input() errors: Array<string> = [ 'fields.errors.required'];

  constructor() { }

  ngOnInit(): void {
  }

}
