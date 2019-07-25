// tslint:disable-next-line: no-implicit-dependencies
import { browser, by, element } from 'protractor';

export class AppPage {
  // tslint:disable: promise-function-async
  // tslint:disable: typedef
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1'))
    .getText() as Promise<string>;
  }
}
