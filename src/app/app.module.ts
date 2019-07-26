import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatButtonToggleModule, MatExpansionModule, MatIconModule, MatListModule
  , MatMenuModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

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
import { StorageService } from './services/storage/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SidenavComponent,
    SidenavItemComponent,
    SidenavSubitemComponent,
    MainComponent,
    LanguageSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
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
    MenuService
  ],
  bootstrap: [AppComponent],
  exports: [
    TranslateModule
  ]
})
export class AppModule { }
