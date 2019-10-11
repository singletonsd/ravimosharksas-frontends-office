import { Component, Input, OnInit } from '@angular/core';
// tslint:disable:no-implicit-dependencies
import { BaseAutocompleteComponent } from '@app/models/base-autocomplete';
import { Addresses } from '@ravimosharksas/apis-task-libs-typescript';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-addresses-auto-complete',
  templateUrl: './addresses-auto-complete.component.html',
  styleUrls: ['./addresses-auto-complete.component.scss']
})
export class AddressesAutoCompleteComponent extends BaseAutocompleteComponent<Addresses>
implements OnInit {

  @Input() showRefClient = true;

  constructor(
    // private readonly clientService: ClientsService,
              logger: NGXLogger) {
    super(logger, 'ADDRESSES_AUTO_COMPLETE');
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  protected _filter(value: string): Array<Addresses> {
    const filterValue = value.toLowerCase();
    let items = 0;

    return this.options.filter((option: Addresses) => {
      if (items > this.maxResults) {
        return false;
      }
      if (option.refClient && option.refClient.toLowerCase()
          .includes(filterValue)) {
        items++;

        return true;
      }
      if (option.client) {
        if (option.client.refClient && option.client.refClient.toLowerCase()
          .includes(filterValue)) {
          items++;

          return true;
        }
      } else if (option.refClient && option.refClient.toLowerCase()
        .includes(filterValue)) {
        items++;

        return true;
      }
      if (option.streetName && option.streetName.toLowerCase()
        .includes(filterValue)) {
        items++;

        return true;
      }
    });
  }

  // TODO: make the api call.
  protected _apiCall(): import('rxjs').Observable<Array<Addresses>> {
    const obs = new BehaviorSubject<Array<Addresses>>([]);

    return obs.asObservable();
    // return this.clientService
    //   .getClients(0, 10, undefined, entity)
    //   .pipe(map(value => value.items));
  }

  public identify(entity: Addresses): string {
    return entity.id.toString();
  }

  public displayFn(address?: Addresses): string | undefined {
    let response = '';
    if (address) {
      response = `${address.streetNumber} ${address.streetName} - ${address.postalCode}`;
      if (this.showRefClient) {
          response = address.client ? `${address.client.refClient} ${response}` : `${address.refClient} ${response}`;
      }
    }

    return response;
  }
}
