import { Component, Input, OnInit } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseAutocompleteComponent } from '@app/models/base-autocomplete';
import { Clients } from '@ravimosharksas/apis-client-libs-typescript';
import { Deleted, Machines, MachinesService } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-machines-auto-complete',
  templateUrl: './machines-auto-complete.component.html',
  styleUrls: ['./machines-auto-complete.component.scss']
})
export class MachinesAutoCompleteComponent extends BaseAutocompleteComponent<Machines>
implements OnInit {

  @Input() refClient: Clients | string;

  constructor(private readonly pieceService: MachinesService,
              logger: NGXLogger) {
    super(logger, 'MACHINE_AUTO_COMPLETE');
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  protected _filter(value: string): Array<Machines> {
    const filterValue = value.toLowerCase();
    let items = 0;

    return this.options.filter((option: Machines) => {
      if (items > 10) {
        return false;
      }
      if (option.refArticle && option.refArticle.toLowerCase()
          .includes(filterValue)
      ) {
        items++;

        return true;
      }
      if (option.serialNumber && option.refArticle.toLowerCase()
          .includes(filterValue)
      ) {
        items++;

        return true;
      }
      if (option.piece && option.piece.refArticle && option.piece.refArticle.toLowerCase()
        .includes(filterValue)) {
          items++;

          return true;
      }
    });
  }

  protected _apiCall(entity: any): import('rxjs').Observable<Array<Machines>> {
    const refClient = typeof this.refClient === 'string' ? this.refClient : this.refClient.refClient;

    return this.pieceService
      .getMachines(0, 10, undefined, entity, Deleted.ACTIVE, undefined, refClient)
      .pipe(map(value => value ? value.items : []));
  }

  public identify(entity: Machines): string {
    return entity.refArticle;
  }

  public displayFn(entity?: Machines): string | undefined {
    if (!entity) {
      return undefined;
    }
    let response = entity.piece ? `${entity.piece.name}` : `${entity.refArticle}`;
    response = entity.serialNumber ? ` ${response} - ${entity.serialNumber}` : `${response}`;

    return response;
  }

}
