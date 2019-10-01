import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { appRoutesNames } from '@app/app.routes.names';

@Component({
  selector: 'app-machines-add',
  templateUrl: './machines-add.component.html',
  styleUrls: ['./machines-add.component.scss']
})
export class MachinesAddComponent implements OnInit {

  public routes = appRoutesNames;

  ngOnInit(): void {
  }

}
