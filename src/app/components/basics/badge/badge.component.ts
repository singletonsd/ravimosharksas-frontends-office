import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() public isInvalid: boolean;
  @Input() public showValid = true;
  @Input() public showInValid = true;
  @Input() public textInvalid = 'actions.invalid.state';
  @Input() public textValid = 'actions.valid.state';

  ngOnInit(): void {
  }

}
