import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: no-implicit-dependencies
import { BaseInputFormComponent } from '@app/models/base-input.class';
import { Observable, concat } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-clients-autocomplete',
  templateUrl: './clients-autocomplete.component.html',
  styleUrls: ['./clients-autocomplete.component.scss']
})
export class ClientsAutocompleteComponent extends BaseInputFormComponent implements OnInit {

  // TODO: check how to set value to input from edit.
  // tslint:disable: align
  options: Array<any> = [
    { reference: 'C3435', nickname: '', name: 'Prueba', surname: ''
      , group: '', company_name: '', score: '', sector: ''
      , email: '', forbidden: true, vat: '' }
    , { reference: 'C3453', nickname: '', name: 'Carlos', surname: ''
      , group: '', company_name: '', score: '', sector: ''
      , email: '', forbidden: false, vat: '' }
    , { reference: 'C3450', nickname: '', name: 'Miguel', surname: ''
      , group: '', company_name: '', score: '', sector: ''
      , email: '', forbidden: true, vat: '' }
    , { reference: 'C3431', nickname: '', name: 'Ramon', surname: ''
      , group: '', company_name: '', score: '', sector: ''
      , email: '', forbidden: false, vat: '' }
    , { reference: 'C3444', nickname: '', name: 'Santiago', surname: ''
      , group: '', company_name: '', score: '', sector: ''
      , email: '', forbidden: true, vat: '' }
    // , { reference: '', nickname: '', name: '', surname: ''
    //   , group: '', company_name: '', score: '', sector: ''
    //   , email: '', forbidden: false, vat: '' }
  ];

  filteredOptions: Observable<Array<any>>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.filteredOptions = this.parent.form.controls[this.controlName].valueChanges
      .pipe(
        startWith(''),
        // map(value => this._filter(value))
        map(value => typeof value === 'string' ? value : value.reference),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  private _filter(name: string): Array<any> {
    const filterValue = name.toLowerCase();

    return this.options.filter(option =>
      option.name.toLowerCase()
        .includes(filterValue) ||
      option.reference.toLowerCase()
        .includes(filterValue));
  }

  displayFn(client?: any): string | undefined {
    return client ? `${client.reference} - ${client.name}` : undefined;
  }

  clear(): void {
    this.parent.form.get('client')
      .setValue('');
    this.parent.form.get('client')
      .markAsUntouched();
  }
}
