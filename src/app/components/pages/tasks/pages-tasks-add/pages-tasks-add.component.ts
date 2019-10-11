import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { appRoutesNames } from '@app/app.routes.names';

@Component({
  selector: 'app-pages-tasks-add',
  templateUrl: './pages-tasks-add.component.html',
  styleUrls: ['./pages-tasks-add.component.scss']
})
export class PagesTasksAddComponent implements OnInit {

  public routes = appRoutesNames;

  ngOnInit(): void {
  }

}
