import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatListModule, MatMenuModule
  , MatSelectModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory, LanguageService } from './services/language/language.service';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { GoogleAnalyticsService } from './services/google-analytics/google-analytics.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
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
    })
  ],
  providers: [
    TranslateService,
    LanguageService,
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent],
  exports: [
    TranslateModule
  ]
})
export class AppModule { }
