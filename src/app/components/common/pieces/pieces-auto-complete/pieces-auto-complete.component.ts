import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { BaseAutocompleteComponent } from '@app/models/base-autocomplete';
import { Pieces, PiecesService } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pieces-auto-complete',
  templateUrl: './pieces-auto-complete.component.html',
  styleUrls: ['./pieces-auto-complete.component.scss']
})
export class PiecesAutoCompleteComponent extends BaseAutocompleteComponent<Pieces>
implements OnInit {

constructor(private readonly pieceService: PiecesService,
            logger: NGXLogger) {
  super(logger, 'PIECES_AUTO_COMPLETE', 'pieces');
}

ngOnInit(): void {
  super.ngOnInit();
}

protected _filter(value: string): Array<Pieces> {
  const filterValue = value.toLowerCase();

  return this.options.filter((option: Pieces) => {
    if (option.refArticle && option.refArticle.toLowerCase()
        .includes(filterValue)
    ) {
      return true;
    }
    if (option.name && option.name.toLowerCase()
      .includes(filterValue)) {
      return true;
    }
  });
}

protected _apiCall(entity: any): import('rxjs').Observable<Array<Pieces>> {
  return this.pieceService
    .getPieces(0, 10, undefined, entity)
    .pipe(map(value => value.items));
}

public identify(entity: Pieces): string {
  return entity.refArticle;
}

public displayFn(client?: Pieces): string | undefined {
  return client ? `${client.refArticle} - ${client.name}` : undefined;
}

}
