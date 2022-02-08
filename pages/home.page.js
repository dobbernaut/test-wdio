import { BasePage } from './base.page';
import { HomePageHeader } from './home-header.page';
import { HomePageFooter } from './home-footer.page';
import { HomePageElements } from './home.element';

export class HomePage extends BasePage {
  #home = new HomePageElements();

  #header = new HomePageHeader();
  #footer = new HomePageFooter();

  get header() {
    return this.#header;
  }
  get footer() {
    return this.#footer;
  }

  async open() {
    await super.open('/');
  }
}
