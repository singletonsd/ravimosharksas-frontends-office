import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { appRoutesNames } from '@app/app.routes.names';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.scss']
})
export class ClientsAddComponent implements OnInit {

  public routes = appRoutesNames;

  constructor() { }

  ngOnInit(): void {
  }

}
