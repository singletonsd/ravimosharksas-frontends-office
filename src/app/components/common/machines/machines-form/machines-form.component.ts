import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseFormNewComponent } from '@app/models/base-form-new.class';
import { Machines } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-machines-form',
  templateUrl: './machines-form.component.html',
  styleUrls: ['./machines-form.component.scss']
})
export class MachinesFormComponent  extends BaseFormNewComponent implements OnInit {

  @Input() item: Machines;

  @Output() readonly added = new EventEmitter<Machines>();

  constructor(private readonly logger: NGXLogger
            // , private readonly translate: TranslateService
            , private readonly cdr: ChangeDetectorRef
            ) {
    super('MACHINES_ADD_FORM', 'models.machine.');
    this.form.addControl('id', new FormControl('', [ ]));
    this.form.addControl('numSerie', new FormControl('', [ Validators.required ]));
    this.form.addControl('piece', new FormControl('', [ Validators.required ]));
    // this.form.get('id')
    //   .disable();
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.item) {
      this.logger.debug(this.COMPONENT_NAME, 'filling form with data of', this.item.id);
      this.form.get('id')
      .setValue(this.item.id);
      this.form.get('numSerie')
      .setValue(this.item.numSerie);
      this.form.get('piece')
      .setValue(this.item.piece);
      this.cdr.detectChanges();
    }
  }

}
