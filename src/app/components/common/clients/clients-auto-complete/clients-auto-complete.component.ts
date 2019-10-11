import { Component, OnInit } from '@angular/core';
// tslint:disable:no-implicit-dependencies
import { BaseAutocompleteComponent } from '@app/models/base-autocomplete';
import { StorageClientsService } from '@app/services/storage/storage-clients.service';
import { Clients, ClientsService } from '@ravimosharksas/apis-contract-libs-typescript';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clients-auto-complete',
  templateUrl: './clients-auto-complete.component.html',
  styleUrls: ['./clients-auto-complete.component.scss']
})
export class ClientsAutocompleteComponent extends BaseAutocompleteComponent<Clients>
  implements OnInit {

  constructor(private readonly clientService: ClientsService,
              logger: NGXLogger
            , storageService: StorageClientsService) {
    super(logger, 'CLIENTS_AUTO_COMPLETE', storageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  protected _filter(value: string): Array<Clients> {
    const filterValue = value.toLowerCase();
    let items = 0;

    return this.options.filter((option: Clients) => {
      if (items > this.maxResults) {
        return false;
      }
      if (option.refClient && option.refClient.toLowerCase()
          .includes(filterValue)) {
        items++;

        return true;
      }
      if (option.name && option.name.toLowerCase()
        .includes(filterValue)) {
        items++;

        return true;
      }
      if (option.nickname && option.nickname.toLowerCase()
        .includes(filterValue)) {
        items++;

        return true;
      }
    });
  }

  protected _apiCall(entity: string): import('rxjs').Observable<Array<Clients>> {
    return this.clientService
      .getClients(0, 10, undefined, entity)
      .pipe(map(value => value.items));
  }

  public identify(entity: Clients): string {
    return entity.refClient;
  }

  public displayFn(client?: Clients): string | undefined {
    return client ? `${client.refClient} - ${client.name}` : undefined;
  }
}
