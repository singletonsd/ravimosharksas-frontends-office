import { Component, OnInit } from '@angular/core';
// tslint:disable:no-implicit-dependencies
import { BaseAutocompleteComponent } from '@app/models/base-autocomplete';
import { StoragePiecesService } from '@app/services/storage/storage-pieces.service';
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
              logger: NGXLogger
            , storageService: StoragePiecesService) {
    super(logger, 'PIECES_AUTO_COMPLETE', storageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  protected _filter(value: string): Array<Pieces> {
    const filterValue = value.toLowerCase();
    let items = 0;

    return this.options.filter((option: Pieces) => {
      if (items > this.maxResults) {
        return false;
      }
      if (option.refArticle && option.refArticle.toLowerCase()
          .includes(filterValue)
      ) {
        items++;

        return true;
      }
      if (option.name && option.name.toLowerCase()
        .includes(filterValue)) {
          items++;

          return true;
      }
    });
  }

  protected _apiCall(entity: any): import('rxjs').Observable<Array<Pieces>> {
    return this.pieceService
      .getPieces(0, 10, undefined, entity)
      .pipe(map(value => value ? value.items : []));
  }

  public identify(entity: Pieces): string {
    return entity.refArticle;
  }

  public displayFn(piece?: Pieces): string {
    if (piece) {
      return typeof piece === 'string' ? piece : `${piece.refArticle} - ${piece.name}`;
    }
  }

}
