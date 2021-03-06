// tslint:disable: max-line-length
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FocusDirectiveDirective } from './directives/focus-directive.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatAutocompleteModule, MatBadgeModule
  , MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule
  , MatDatepickerModule, MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule
  , MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule
  , MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSnackBarModule
  , MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { CUSTOM_FORMATS } from './app.dates.formats';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './components/basics/language-selector/language-selector.component';
import { HttpLoaderFactory, LanguageService } from './services/language/language.service';

import { ApiModule as ApiRavimoClientModule } from '@ravimosharksas/apis-client-libs-typescript';
import { ApiModule as ApiRavimoContractModule } from '@ravimosharksas/apis-contract-libs-typescript';
import { ApiModule as ApiRavimoTaskModule } from '@ravimosharksas/apis-task-libs-typescript';

import { apiClientConfigFactory, apiContractConfigFactory, apiTaskConfigFactory, configServicesFactory } from './app.configuration';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { GoogleAnalyticsService } from './services/google-analytics/google-analytics.service';

import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';

import { SidenavItemComponent } from './components/layout/sidenav/sidenav-item/sidenav-item.component';
import { SidenavSubitemComponent } from './components/layout/sidenav/sidenav-subitem/sidenav-subitem.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';

import { GuardService } from './services/guard/guard.service';
import { MenuService } from './services/menu/menu.service';
import { PreviousRouteService } from './services/previous-route/previous-route.service';
import { StorageService } from './services/storage/storage.service';

import { BadgeComponent } from './components/basics/badge/badge.component';
import { BaseDialogComponent } from './components/basics/dialog/base-dialog/base-dialog.component';
import { BaseAreaComponent } from './components/basics/forms/base-area/base-area.component';
import { BaseAutoCompleteComponent } from './components/basics/forms/base-auto-complete/base-auto-complete.component';
import { BaseInputComponent } from './components/basics/forms/base-input/base-input.component';
import { DateInputComponent } from './components/basics/forms/date-input/date-input.component';
import { BaseNotificationComponent } from './components/basics/notification/notification.component';
import { BaseNotificationSimpleComponent } from './components/basics/notification/simple/simple.component';
import { BaseTableOptionsComponent } from './components/basics/table/base-table-options/base-table-options.component';
import { BaseTableToolbarComponent } from './components/basics/table/base-table-toolbar/base-table-toolbar.component';

import { MainNotAccessComponent } from './components/pages/not-access/not-access.component';
import { MainNotAvailableComponent } from './components/pages/not-available/not-available.component';
import { MainNotFoundComponent } from './components/pages/not-found/not-found.component';

import { HomeComponent } from './components/pages/home/home.component';

import { AddressesAddFormComponent } from './components/common/addresses/addresses-add-form/addresses-add-form.component';
import { AddressesAutoCompleteComponent } from './components/common/addresses/addresses-auto-complete/addresses-auto-complete.component';
import { AddressesTableOptionsComponent } from './components/common/addresses/addresses-table/addresses-table-options/addresses-table-options.component';
import { AddressesTableComponent } from './components/common/addresses/addresses-table/addresses-table.component';
import { AddressesAddComponent } from './components/pages/addresses/addresses-add/addresses-add.component';
import { AddressesMainComponent } from './components/pages/addresses/addresses-main/addresses-main.component';

import { ClientsAddFormComponent } from './components/common/clients/clients-add-form/clients-add-form.component';
import { ClientsAutocompleteComponent } from './components/common/clients/clients-auto-complete/clients-auto-complete.component';
import { ClientsCellComponent } from './components/common/clients/clients-cell/clients-cell.component';
import { ClientsFormComponent } from './components/common/clients/clients-form/clients-form.component';
import { ClientsTableOptionsComponent } from './components/common/clients/clients-table/clients-table-options/clients-table-options.component';
import { ClientsTableComponent } from './components/common/clients/clients-table/clients-table.component';
import { ClientsAddComponent } from './components/pages/clients/clients/clients-add/clients-add.component';
import { ClientsMainComponent } from './components/pages/clients/clients/clients-main/clients-main.component';

import { ContractsAddFormComponent } from './components/common/contracts/contracts-add-form/contracts-add-form.component';
import { ContractsAutoCompleteComponent } from './components/common/contracts/contracts-auto-complete/contracts-auto-complete.component';
import { ContractsFormComponent } from './components/common/contracts/contracts-form/contracts-form.component';
import { ContractsPanelImportedMachinesComponent } from './components/common/contracts/contracts-panel-imported-machines/contracts-panel-imported-machines.component';
import { ContractsPanelLocationsComponent } from './components/common/contracts/contracts-panel-locations/contracts-panel-locations.component';
import { ContractsTableOptionsComponent } from './components/common/contracts/contracts-table/contracts-table-options/contracts-table-options.component';
import { ContractsTableToolbarComponent } from './components/common/contracts/contracts-table/contracts-table-toolbar/contracts-table-toolbar.component';
import { ContractsTableComponent } from './components/common/contracts/contracts-table/contracts-table.component';
import { ContractsReviewFormComponent } from './components/common/contracts/review/contracts-review-form/contracts-review-form.component';
import { ContractsAddComponent } from './components/pages/contracts/contracts-add/contracts-add.component';
import { ContractsMainComponent } from './components/pages/contracts/contracts-main/contracts-main.component';
import { ContractsReviewComponent } from './components/pages/contracts/contracts-review/contracts-review.component';

import { ImportedMachinesAddFormComponent } from './components/common/importedMachines/imported-machines-add-form/imported-machines-add-form.component';

import { MachinesAddFormComponent } from './components/common/machines/machines-add-form/machines-add-form.component';
import { MachinesAutoCompleteComponent } from './components/common/machines/machines-auto-complete/machines-auto-complete.component';
import { MachinesFormComponent } from './components/common/machines/machines-form/machines-form.component';
import { MachinesAddComponent } from './components/pages/machines/machines-add/machines-add.component';

import { LocationsFormComponent } from './components/common/locations/locations-form/locations-form.component';

import { PiecesAutoCompleteComponent } from './components/common/pieces/pieces-auto-complete/pieces-auto-complete.component';

import { ImportedMachinesAutoCompleteComponent } from './components/common/importedMachines/imported-machines-auto-complete/imported-machines-auto-complete.component';
import { ImportedMachinesFormComponent } from './components/common/importedMachines/imported-machines-form/imported-machines-form.component';

import { TasksAddFormComponent } from './components/common/tasks/tasks-add-form/tasks-add-form.component';
import { TasksFormComponent } from './components/common/tasks/tasks-form/tasks-form.component';
import { TasksTypeSelectComponent } from './components/common/tasks/tasks-type-select/tasks-type-select.component';
import { PagesTasksAddComponent } from './components/pages/tasks/pages-tasks-add/pages-tasks-add.component';
import { PagesTasksMainComponent } from './components/pages/tasks/pages-tasks-main/pages-tasks-main.component';

import { TechniciansAutoCompleteComponent } from './components/common/technicians/technicians-auto-complete/technicians-auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    FocusDirectiveDirective,
    ToolbarComponent,
    FooterComponent,
    SidenavComponent,
    SidenavItemComponent,
    SidenavSubitemComponent,
    BadgeComponent,
    BaseInputComponent,
    BaseAreaComponent,
    BaseAutoCompleteComponent,
    BaseDialogComponent,
    BaseNotificationComponent,
    BaseNotificationSimpleComponent,
    BaseTableToolbarComponent,
    BaseTableOptionsComponent,
    DateInputComponent,
    LanguageSelectorComponent,
    MainComponent,
    HomeComponent,
    MainNotAccessComponent,
    MainNotAvailableComponent,
    MainNotFoundComponent,
    AddressesAddComponent,
    AddressesAutoCompleteComponent,
    AddressesAddFormComponent,
    AddressesMainComponent,
    AddressesTableComponent,
    AddressesTableOptionsComponent,
    ClientsAddFormComponent,
    ClientsAddComponent,
    ClientsFormComponent,
    ClientsMainComponent,
    ClientsTableComponent,
    ClientsTableOptionsComponent,
    ClientsAutocompleteComponent,
    ClientsCellComponent,
    ContractsAddFormComponent,
    ContractsAddComponent,
    ContractsAutoCompleteComponent,
    ContractsFormComponent,
    ContractsMainComponent,
    ContractsPanelImportedMachinesComponent,
    ContractsPanelLocationsComponent,
    ContractsReviewComponent,
    ContractsReviewFormComponent,
    ContractsTableComponent,
    ContractsTableOptionsComponent,
    ContractsTableToolbarComponent,
    MachinesAddFormComponent,
    MachinesAutoCompleteComponent,
    MachinesAddComponent,
    MachinesFormComponent,
    LocationsFormComponent,
    PiecesAutoCompleteComponent,
    ImportedMachinesAddFormComponent,
    ImportedMachinesAutoCompleteComponent,
    ImportedMachinesFormComponent,
    TasksAddFormComponent,
    TasksFormComponent,
    TasksTypeSelectComponent,
    PagesTasksAddComponent,
    PagesTasksMainComponent,
    TechniciansAutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTooltipModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    LoggerModule.forRoot({
      // serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      // serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: false
    }),
    LayoutModule,
    ApiRavimoClientModule.forRoot(apiClientConfigFactory),
    ApiRavimoContractModule.forRoot(apiContractConfigFactory),
    ApiRavimoTaskModule.forRoot(apiTaskConfigFactory)
  ],
  providers: [
    TranslateService,
    LanguageService,
    GoogleAnalyticsService,
    GuardService,
    MenuService,
    PreviousRouteService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_FORMATS },
    StorageService,
    { provide: APP_INITIALIZER, useFactory: configServicesFactory, multi: true, deps: [ StorageService ] }
  ],
  bootstrap: [AppComponent],
  exports: [
    TranslateModule
  ],
  entryComponents: [
    AddressesAddFormComponent,
    ClientsAddFormComponent,
    ContractsAddFormComponent,
    ImportedMachinesAddFormComponent,
    MachinesAddFormComponent
  ]
})
export class AppModule { }
