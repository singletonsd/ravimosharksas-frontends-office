import { Component, Input, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseInputFormComponent } from '@app/models/base-input-form.class';
import { TaskTypes } from '@ravimosharksas/apis-task-libs-typescript';

@Component({
  selector: 'app-tasks-type-select',
  templateUrl: './tasks-type-select.component.html',
  styleUrls: ['./tasks-type-select.component.scss']
})
export class TasksTypeSelectComponent extends BaseInputFormComponent {

  @Input() selected: TaskTypes = 'STOP_PARCIAL';

  @ViewChild(MatSelect) readonly selector: MatSelect;
  public options = [];

  constructor() {
    super();
    for (const option in TaskTypes) {
      if (option) {
        this.options.push(option);
      }
    }
  }

  identify(item: String): String {
    return item;
  }
}
