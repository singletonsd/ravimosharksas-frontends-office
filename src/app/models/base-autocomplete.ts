import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';
import { BaseInputFormComponent } from './base-input-form.class';
import { BaseStorageService } from './base-storage-service.class';

export abstract class BaseAutocompleteComponent<T> extends BaseInputFormComponent
  implements OnInit {

  @Input() useGlobal = true;

  @Output() readonly optionSelected = new EventEmitter<any>();
  @Output() readonly clearEvent = new EventEmitter<any>();

  public filteredOptions = new BehaviorSubject<Array<T>>([]);
  public filteredOptions$ = this.filteredOptions.asObservable();

  public loading = new BehaviorSubject<boolean>(false);
  public loading$ = this.loading.asObservable();

  protected maxResults = 10;

  options: Array<T> = [];

  constructor(private readonly logger: NGXLogger,
              protected readonly COMPONENT_NAME: string,
              service?: BaseStorageService<T>) {
    super();
    if (service) {
      service.items$.subscribe(items => this.options = items);
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.useGlobal) {
      this.logger.info(`${this.COMPONENT_NAME} using global values...`);
      this.parent.form.controls[this.controlName].valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        filter((query: string) => query && query.length > 2),
        debounceTime(200),
        map(value => typeof value === 'string' ? value : this.displayFn(value)),
        map(client => client ? this._filter(client) : this.options.slice(0, this.maxResults)))
        .subscribe((items: Array<T>) => {
          this.logger.info(`${this.COMPONENT_NAME} got ${items.length} of ${this.options.length}`);
          this.logger.debug(`${this.COMPONENT_NAME} got values`, items);
          this.filteredOptions.next(items);
      });
    } else {
      this.parent.form.controls[this.controlName].valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        filter((query: string) => query && query.length > 2),
        debounceTime(200),
        tap(() => {
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
      this.clearEvent.emit();
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
