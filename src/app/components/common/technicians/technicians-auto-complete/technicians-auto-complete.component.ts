import { Component, OnInit } from '@angular/core';
// tslint:disable:no-implicit-dependencies
import { BaseAutocompleteComponent } from '@app/models/base-autocomplete';
import { StorageTechniciansService } from '@app/services/storage/storage-technicians.service';
import { Technicians, TechniciansService } from '@ravimosharksas/apis-task-libs-typescript';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-technicians-auto-complete',
  templateUrl: './technicians-auto-complete.component.html',
  styleUrls: ['./technicians-auto-complete.component.scss']
})
export class TechniciansAutoCompleteComponent extends BaseAutocompleteComponent<Technicians>
implements OnInit {

  constructor(private readonly service: TechniciansService,
              logger: NGXLogger
            , storageService: StorageTechniciansService) {
    super(logger, 'TECHNICIANS_AUTO_COMPLETE', storageService, 0);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  protected _filter(value: string): Array<Technicians> {
    const filterValue = value.toLowerCase();
    let items = 0;

    return this.options.filter((option: Technicians) => {
      if (items > this.maxResults) {
        return false;
      }
      if (option.name && option.name.toLowerCase()
          .includes(filterValue)) {
        items++;

        return true;
      }
      if (option.id && option.id.toString()
        .includes(filterValue)) {
        items++;

        return true;
      }
    });
  }

  protected _apiCall(entity: string): import('rxjs').Observable<Array<Technicians>> {
    return this.service
      .getTechnicians(0, 10, undefined, entity)
      .pipe(map(value => value ? value.items : []));
  }

  public identify(entity: Technicians): string | undefined {
    return entity.id ? entity.id.toString() : undefined;
  }

  public displayFn(tech?: Technicians | number): string | undefined {
    if (tech) {
      return typeof tech === 'number' ? tech.toString() : `${tech.id} - ${tech.name}`;
    }
  }

}
