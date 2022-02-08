import { BasePage } from './base.page';
import { HomePageHeaderElements } from './home-header.element';

export class HomePageHeader extends BasePage {
  #header = new HomePageHeaderElements();

  async openFlybuysStore() {
    await this.#header.flybuysStore.click();
  }
}
