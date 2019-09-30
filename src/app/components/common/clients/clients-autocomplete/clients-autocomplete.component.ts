import { Component, Input, OnInit } from '@angular/core';
// tslint:disable: no-implicit-dependencies
import { BaseInputFormComponent } from '@app/models/base-input.class';
import { environment } from '@env/environment';
import { Clients, ClientsService, InlineResponse200 } from '@ravimosharksas/apis-contract-libs-typescript';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';

declare var require: any;
@Component({
  selector: 'app-clients-autocomplete',
  templateUrl: './clients-autocomplete.component.html',
  styleUrls: ['./clients-autocomplete.component.scss']
})
export class ClientsAutocompleteComponent extends BaseInputFormComponent implements OnInit {

  @Input() useGlobal = true;

  options: Array<Clients> = [];

  public filteredOptions = new BehaviorSubject<Array<Clients>>([]);
  public filteredOptions$: Observable<Array<Clients>>;

  public loading = new BehaviorSubject<boolean>(false);
  public loading$ = this.loading.asObservable();

  constructor(public readonly clientService: ClientsService) {
    super();
    if (!environment.production) {
      // tslint:disable-next-line:no-require-imports
      this.options.push(require('../../../../../../test/mock_data/clients.json'));
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.useGlobal) {
    // this.filteredOptions =
    this.parent.form.controls[this.controlName].valueChanges
      .pipe(
        startWith(''),
        // map(value => this._filter(value))
        map(value => typeof value === 'string' ? value : value),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    } else {
      this.parent.form.controls[this.controlName].valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.filteredOptions.next([]);
          this.loading.next(true);
        })
        , switchMap(value => this.clientService.getClients(0, 10, undefined, 'refClient like' + value)
          .pipe(
            finalize(() => {
              this.loading.next(false);
            })
          )
        )
      )
      .subscribe((data: InlineResponse200) => {
        this.filteredOptions.next(data.items);
      });
    }
  }

  private _filter(name: Clients | string): Array<Clients> {
    if (typeof name === 'object') {
      return [];
    }
    const filterValue = name.toLowerCase();

    return this.options.filter((option: Clients) => {
      if (option.refClient && option.refClient.toLowerCase()
        .includes(filterValue)) {
        return true;
      }
      if (option.name && option.name.toLowerCase()
        .includes(filterValue)) {
        return true;
      }
      if (option.nickname && option.nickname.toLowerCase()
        .includes(filterValue)) {
        return true;
      }
    });
  }

  displayFn(client?: Clients): string | undefined {
    return client ? `${client.refClient} - ${client.name}` : undefined;
  }

  clear(): void {
    if (this.parent.form.get(this.controlName).enabled) {
      this.parent.form.get(this.controlName)
        .setValue('');
      this.parent.form.get(this.controlName)
        .markAsUntouched();
    }
  }

  identify(item: Clients): String {
    return item.refClient;
  }
}
