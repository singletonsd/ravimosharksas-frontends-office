import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
// tslint:disable: no-implicit-dependencies
import { BaseFormAddComponent } from '@app/models/base-form-add.class';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { Tasks, TasksService } from '@ravimosharksas/apis-task-libs-typescript';
import { NGXLogger } from 'ngx-logger';

declare var require: any;
@Component({
  selector: 'app-tasks-add-form',
  templateUrl: './tasks-add-form.component.html',
  styleUrls: ['./tasks-add-form.component.scss']
})
export class TasksAddFormComponent  extends BaseFormAddComponent<any> implements OnInit {

  @Input() isSubmitting = false;

  constructor(logger: NGXLogger
            , private readonly translate: TranslateService
            , private readonly service: TasksService
            , cdr: ChangeDetectorRef
            ) {
    super('CONTRACTS_ADD_FORM', 'models.contract.', cdr, logger, 'contract');
  }

  ngOnInit(): void {
    if (!environment.production && !this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'adding data from mock json...');
      // tslint:disable-next-line:no-require-imports
      this.item = require('../../../../../../test/mock_data/tasks.json')[0];
    }
  }

  protected fillForm(): void {
  }

  finishSubmit(): void {
    const data: Tasks = {};
    Object.assign(data, this.form.getRawValue());
    this.logger.debug(this.COMPONENT_NAME, 'form submitted.', data);
    if (this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'edit');
      this.item = data;
      this.service.editTask(data)
      .subscribe(editedContract => {
        this.translate.get('pages.task.results.success.edit')
          .subscribe(text => {
            this.added.next(editedContract);
            this.notification.success(text);
            this.logger.debug(this.COMPONENT_NAME, 'success', editedContract);
            this.finishAPICall(false);
          });
      }, error => {
        const translate = (error && error.error && error.error.message ? error.error.message : 'fields.errors.unknown');
        this.translate.get(translate)
          .subscribe(text => {
            this.notification.error(text);
            this.logger.warn(this.COMPONENT_NAME, 'An error occur', error);
            this.finishAPICall(false);
          });
      });
    } else {
      this.logger.debug(this.COMPONENT_NAME, 'add');
      this.service.addTask(data)
      .subscribe(newItem => {
        this.translate.get('pages.task.results.success.add')
          .subscribe(text => {
            this.notification.success(text);
            this.logger.debug(this.COMPONENT_NAME, 'success', newItem);
            this.added.next(newItem);
            this.finishAPICall(false);
          });
      }, error => {
        const translate = (error && error.error && error.error.message ? error.error.message : 'fields.errors.unknown');
        this.translate.get(translate)
          .subscribe(text => {
            this.notification.error(text);
            this.logger.warn(this.COMPONENT_NAME, 'An error occur', error);
            this.finishAPICall(false);
          });
      });
    }

  }

}
