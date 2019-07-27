import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatExpansionModule, MatIconModule
  , MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule
  , MatSelectModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './components/basics/language-selector/language-selector.component';
import { HttpLoaderFactory, LanguageService } from './services/language/language.service';

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

import { BaseDialogComponent } from './components/basics/dialog/base-dialog/base-dialog.component';
import { BaseNotificationComponent } from './components/basics/notification/notification.component';
import { BaseNotificationSimpleComponent } from './components/basics/notification/simple/simple.component';
import { BaseTableOptionsComponent } from './components/basics/table/base-table-options/base-table-options.component';
import { BaseTableToolbarComponent } from './components/basics/table/base-table-toolbar/base-table-toolbar.component';

import { MainNotAccessComponent } from './components/pages/not-access/not-access.component';
import { MainNotAvailableComponent } from './components/pages/not-available/not-available.component';
import { MainNotFoundComponent } from './components/pages/not-found/not-found.component';

import { HomeComponent } from './components/pages/home/home.component';

import { AddressesAddFormComponent } from './components/common/addresses/addresses-add-form/addresses-add-form.component';
import { AddressesAddComponent } from './components/pages/addresses/addresses-add/addresses-add.component';
import { AddressesMainComponent } from './components/pages/addresses/addresses-main/addresses-main.component';
import { BaseInputComponent } from './components/basics/forms/base-input/base-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SidenavComponent,
    SidenavItemComponent,
    SidenavSubitemComponent,
    MainComponent,
    BaseDialogComponent,
    BaseNotificationComponent,
    BaseNotificationSimpleComponent,
    BaseTableToolbarComponent,
    BaseTableOptionsComponent,
    LanguageSelectorComponent,
    MainNotAccessComponent,
    MainNotAvailableComponent,
    MainNotFoundComponent,
    AddressesAddComponent,
    AddressesMainComponent,
    AddressesAddFormComponent,
    HomeComponent,
    BaseInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
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
    LayoutModule
  ],
  providers: [
    TranslateService,
    LanguageService,
    GoogleAnalyticsService,
    GuardService,
    StorageService,
    MenuService,
    PreviousRouteService
  ],
  bootstrap: [AppComponent],
  exports: [
    TranslateModule
  ]
})
export class AppModule { }
