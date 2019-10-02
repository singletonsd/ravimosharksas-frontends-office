import { Input, OnInit } from '@angular/core';
// tslint:disable-next-line:no-implicit-dependencies
import { environment } from '@env/environment';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';
import { BaseInputFormComponent } from './base-input-form.class';

declare var require: any;
export abstract class BaseAutocompleteComponent<T> extends BaseInputFormComponent
  implements OnInit {

  @Input() useGlobal = true;

  public filteredOptions = new BehaviorSubject<Array<T>>([]);
  public filteredOptions$ = this.filteredOptions.asObservable();

  public loading = new BehaviorSubject<boolean>(false);
  public loading$ = this.loading.asObservable();

  options: Array<T> = [];

  constructor(
    private readonly logger: NGXLogger,
    protected readonly COMPONENT_NAME: string,
    jsonFile?: string
  ) {
    super();
    if (!environment.production) {
      logger.debug(COMPONENT_NAME, 'adding data from mock json...');
      if (jsonFile) {
        // tslint:disable-next-line:no-require-imports
        this.options.push(
          ...require('../../../test/mock_data/'.concat(
            jsonFile,
            '.json'
          ))
        );
      }
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.useGlobal) {
      this.parent.form.controls[this.controlName].valueChanges
      .pipe(
        // debounceTime(500),
        startWith(''),
        distinctUntilChanged(),
        map(value => typeof value === 'string' ? value : this.displayFn(value)),
        map(client => client ? this._filter(client) : this.options.slice()))
        .subscribe((clients: Array<T>) => {
          this.filteredOptions.next(clients);
      })
      ;
    } else {
      this.parent.form.controls[this.controlName].valueChanges
      .pipe(
        debounceTime(500)
        , tap(() => {
          this.filteredOptions.next([]);
          this.loading.next(true);
        })
        , switchMap(value => this._apiCall(value)
          .pipe(
            finalize(() => {
              this.loading.next(false);
            })
          )
        )
      )
      .subscribe(data => {
        this.filteredOptions.next(data);
      });
    }
  }

  clear(): void {
    if (this.parent.form.get(this.controlName).enabled) {
      this.parent.form.get(this.controlName)
        .setValue('');
      this.parent.form.get(this.controlName)
        .markAsUntouched();
    }
  }

  onKeydownEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {// escape pressed
      this.clear();
    }
 }

  public log(message: any, ...additional: Array<any>): void {
    this.logger.debug(this.COMPONENT_NAME, message, additional);
  }

  protected abstract _filter(value: string): Array<T>;
  protected abstract _apiCall(filterBy: string): Observable<Array<T>>;
  public abstract identify(entity: T): string;
  public abstract displayFn(entity: T): string | undefined;
}
