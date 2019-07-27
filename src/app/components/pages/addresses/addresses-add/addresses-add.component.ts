import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { appRoutesNames } from '@app/app.routes.names';

@Component({
  selector: 'app-addresses-add',
  templateUrl: './addresses-add.component.html',
  styleUrls: ['./addresses-add.component.scss']
})
export class AddressesAddComponent implements OnInit {

  public routes = appRoutesNames;

  constructor() { }

  ngOnInit(): void {
  }

}
