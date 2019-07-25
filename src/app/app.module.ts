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
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainComponent } from './components/layout/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SidenavComponent,
    MainComponent
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
    }),
    LayoutModule
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
