// tslint:disable:no-implicit-dependencies
import { Component, OnInit } from '@angular/core';
import { BaseExpandedClass } from '@app/models/base-expanded.class';
import { environment } from '@env/environment';
import { Contracts, ContractsService, Deleted, InlineResponse2001, Reviewed } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';

declare var require: any;
@Component({
  selector: 'app-contracts-review-form',
  templateUrl: './contracts-review-form.component.html',
  styleUrls: ['./contracts-review-form.component.scss']
})
export class ContractsReviewFormComponent extends BaseExpandedClass implements OnInit {

  COMPONENT_NAME = 'CONTRACTS_REVIEW_PAGE';

  data: InlineResponse2001;
  loading = false;
  done: Array<boolean>;

  constructor(private readonly contractsService: ContractsService
            , private readonly logger: NGXLogger) {
    super();
    if (!environment.production) {
      this.logger.debug(this.COMPONENT_NAME, 'adding data from mock json...');
      // tslint:disable-next-line:no-require-imports
      this.setNewData(require('../../../../../../../test/mock_data/contracts_review.json'));
      // this.setNewData({ metadata: last })
    }
  }

  ngOnInit(): void {
  }

  identify(item: Contracts): number {
    return item.refContract;
  }

  setNewData(newData: InlineResponse2001): void {
    this.data = newData ? newData : { items: []};
    this.done = new Array<boolean>(this.data.items.length);
    this.expansionMax = this.data.items.length - 1;
  }

  setDone(index: number): void {
    console.log(`done ${index}`);
    this.done[index] = true;
    this.nextStep();
  }

  load(): void {
    this.loading = true;
    this.contractsService.getContracts(0, 5, undefined, undefined
      , Deleted.ACTIVE, true, undefined, Reviewed.REVIEWED)
      .subscribe(response => {
        this.setNewData(response);
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }

  lastItem(): void {
    if (this.done.every(value => value)) {
      this.load();
    }
  }
}
