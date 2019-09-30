import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { appRoutesNames } from '@app/app.routes.names';

@Component({
  selector: 'app-main-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class MainNotFoundComponent implements OnInit {

  public routes = appRoutesNames;

  ngOnInit(): void {
  }

}
