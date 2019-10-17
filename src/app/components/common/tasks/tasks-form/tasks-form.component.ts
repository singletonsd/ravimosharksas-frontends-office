import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { Addresses, Clients } from '@ravimosharksas/apis-client-libs-typescript';
import { Tasks } from '@ravimosharksas/apis-task-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent extends BaseFormNewComponent<Tasks> {

  @Input() isSubmitting = false;

  public selectedClient: Clients | string;

  constructor(logger: NGXLogger) {
    super('TASKS_FORM', 'models.task.', logger, 'tasks');
    this.form.addControl('id', new FormControl('', [ ]));
    this.form.addControl('address', new FormControl('', [ Validators.required ]));
    this.form.addControl('technician', new FormControl('', [ Validators.required ]));
    this.form.addControl('machine', new FormControl('', [ ]));
    this.form.addControl('dateCall', new FormControl('', [ Validators.required ]));
    this.form.addControl('dateFix', new FormControl('', [ ]));
    this.form.addControl('problem', new FormControl('', []));
    this.form.addControl('solution', new FormControl('', []));
    this.form.addControl('taskType', new FormControl('', [ Validators.required ]));
    this.form.addControl('priority', new FormControl('', []));
    this.form.addControl('initiator', new FormControl('', [ Validators.required ]));
    this.form.addControl('taskTime', new FormControl('', [ ]));
    this.form.addControl('ratingClient', new FormControl('', []));
    this.form.addControl('ratingTech', new FormControl('', []));

    this.form.get('id')
      .disable();
    this.form.get('machine')
      .disable();
  }

  protected fillForm(): void {
    this.logger.info(this.COMPONENT_NAME, 'filling form');
    if (this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.id);
      this.form.get('id')
      .setValue(this.item.id);
      this.form.get('address')
      .setValue(this.item.address);
      this.form.get('technician')
      .setValue(this.item.technician);
      this.form.get('machine')
      .setValue(this.item.machine);
      this.form.get('dateCall')
      .setValue(this.item.dateCall);
      this.form.get('dateFix')
      .setValue(this.item.dateFix);
      this.form.get('problem')
      .setValue(this.item.problem);
      this.form.get('solution')
      .setValue(this.item.solution);
      this.form.get('taskType')
      .setValue(this.item.taskType);
      this.form.get('priority')
      .setValue(this.item.priority);
      this.form.get('initiator')
      .setValue(this.item.initiator);
      this.form.get('taskTime')
      .setValue(this.item.taskTime);
      this.form.get('ratingClient')
      .setValue(this.item.ratingClient);
      this.form.get('ratingTech')
      .setValue(this.item.ratingTech);
    }
  }

  protected afterControlAdded(): void {
  }

  public loadMachines(address: Addresses): void {
    this.selectedClient = address.client ? address.client : address.refClient;
    this.logger.info(`${this.COMPONENT_NAME} selected address ${address.id} of ${this.selectedClient}`);
    this.form.get('machine')
      .enable();
  }
}
