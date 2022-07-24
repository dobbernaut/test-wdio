import { BasePage } from './base.page';
import { HomePageFooterElements } from './home-footer.element';

export class HomePageFooter extends BasePage {
  #footer = new HomePageFooterElements();

  async searchTheFlybuysStore(search) {
    await this.#footer.searchBox.setValue(search);
    await this.#footer.searchButton.click();
  }
}
