import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ravimoshark - Office';

  constructor(meta: Meta
            , router: Router) {
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
  }
}
