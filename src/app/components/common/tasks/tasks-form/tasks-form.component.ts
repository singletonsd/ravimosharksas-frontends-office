import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { Tasks } from '@ravimosharksas/apis-task-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent extends BaseFormNewComponent<Tasks> {

  @Input() isSubmitting = true;

  constructor(logger: NGXLogger) {
    super('TASKS_FORM', 'models.task.', logger, 'tasks');
    this.form.addControl('id', new FormControl('', [ ]));
    this.form.addControl('address', new FormControl('', [ Validators.required ]));
    this.form.addControl('technician', new FormControl('', [ Validators.required ]));
    this.form.addControl('machine', new FormControl('', [ Validators.required ]));
    this.form.addControl('dateCall', new FormControl('', [ Validators.required ]));
    this.form.addControl('dateFix', new FormControl('', [ ]));
    this.form.addControl('problem', new FormControl('', []));
    this.form.addControl('solution', new FormControl('', []));
    this.form.addControl('taskType', new FormControl('', [ Validators.required ]));
    this.form.addControl('priority', new FormControl('', []));
    this.form.addControl('initiator', new FormControl('', [ Validators.required ]));
    this.form.addControl('ratingClient', new FormControl('', []));
    this.form.addControl('ratingTech', new FormControl('', []));
  }

  protected fillForm(): void {
    this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.id);
    // this.form.get('refContract')
    // .setValue(this.item.refContract);
    // this.form.get('dateDebut')
    // .setValue(this.item.dateDebut);
    // this.form.get('dateFin')
    // .setValue(this.item.dateFin);
    // this.form.get('loyer')
    // .setValue(this.item.loyer);
    // this.form.get('miniconso')
    // .setValue(this.item.miniconso);
    // this.form.get('reconduction')
    // .setValue(this.item.reconduction);
    // this.form.get('identification')
    // .setValue(this.item.identification);
    // this.form.get('client')
    // .setValue(this.item.client);
    // this.form.get('reviewed')
    // .setValue(this.item.reviewed);
    // this.form.get('valid')
    // .setValue(this.item.valid);

    this.form.get('id')
      .disable();
    // this.form.get('client')
    //   .disable();
    // this.form.get('refContract')
    //   .disable();
    // this.form.get('dateDebut')
    //   .disable();
    // this.form.get('dateFin')
    //   .disable();
  }

  protected afterControlAdded(): void {
  }

}
