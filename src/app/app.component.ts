import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
// tslint:disable-next-line:no-implicit-dependencies
import { environment } from '@env/environment';
import { NGXLogger } from 'ngx-logger';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public sideNavOpened = true;

  constructor(meta: Meta
            , router: Router
            , logger: NGXLogger) {
    meta.addTag({
      name: 'description',
      content: `Ravimoshark Office web application.`
    });
    meta.addTag({
      name: 'keywords',
      content: `Ravimo, Ravimoshark, France, Italy, Ravimoshark France, Ravimoshark Italy`
    });
    meta.addTag({
      name: 'robots',
      content: `index,follow`
    });
    meta.addTag({
      name: 'title',
      content: `Ravimoshark - Office`
    });

    router.events
    .subscribe(event => {
    if (event instanceof NavigationEnd) {
      gtag('config', 'UA-144560124-1',
            {
              page_path: event.urlAfterRedirects
            }
          );
    }
    });
    if (!environment.production) {
      logger.debug('Running with development environment');
    } else {
      logger.debug('Running with production environment');
    }
  }
}
