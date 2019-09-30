import { Component, Input, OnInit } from '@angular/core';
// tslint:disable: no-implicit-dependencies
import { BaseInputFormComponent } from '@app/models/base-input.class';
import { environment } from '@env/environment';
import { Clients } from '@ravimosharksas/apis-contract-libs-typescript';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

declare var require: any;
@Component({
  selector: 'app-clients-autocomplete',
  templateUrl: './clients-autocomplete.component.html',
  styleUrls: ['./clients-autocomplete.component.scss']
})
export class ClientsAutocompleteComponent extends BaseInputFormComponent implements OnInit {

  @Input() useGlobal = true;

  // TODO: check how to set value to input from edit.
  options: Array<Clients> = [];

  filteredOptions: Observable<Array<any>>;

  constructor() {
    super();
    if (!environment.production) {
      // tslint:disable-next-line:no-require-imports
      this.options.push(...require('../../../../../../test/mock_data/clients.json'));
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.useGlobal) {
    this.filteredOptions = this.parent.form.controls[this.controlName].valueChanges
      .pipe(
        startWith(''),
        // map(value => this._filter(value))
        map(value => typeof value === 'string' ? value : value),
        map(name => name ? this._filter(name) : this.options.slice())
      );
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
