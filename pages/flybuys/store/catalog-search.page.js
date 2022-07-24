import { BasePage } from '@page/flybuys/base.page';
import { StoreCatalogSearchPageElements } from './catalog-search.element';

export class StoreCatalogSearchPage extends BasePage {
  #catalogSearch = new StoreCatalogSearchPageElements();

  /**
   * Return the number of search item results.
   *
   * @returns {Promise<number>}
   */
  async getNumberOfSearchItems() {
    await this.#catalogSearch.numberOfSearchItems.waitForExist();
    return parseInt(await (await this.#catalogSearch.numberOfSearchItems).getText(), 10);
  }

  /**
   * Return a detailed list of search item results.
   * Each item on the list includes the product id, name, url and required points
   *
   * @return {Promise<[{ productId, name, url, points }>]
   */
  async getSearchItems() {
    await this.#catalogSearch.itemsList.waitForExist();

    const searchItems = [];
    for (const [index] of (await this.#catalogSearch.items).entries()) {
      searchItems.push({
        productId: await this.getProductId(index),
        name: await this.getProductName(index),
        url: await this.getProductUrl(index),
        points: await this.getProductRequiredPoints(index),
      });
    }
    return searchItems;
  }

  /** @private */
  async getProductId(productIndex) {
    return parseInt(await (await this.#catalogSearch.products)[productIndex].getAttribute('data-product-id'), 10);
  }

  /** @private */
  async getProductName(productIndex) {
    return (await (await this.#catalogSearch.productNames)[productIndex].getText()).toLowerCase();
  }

  /** @private */
  async getProductUrl(productIndex) {
    return await (await this.#catalogSearch.productUrls)[productIndex].getAttribute('href');
  }

  /** @private */
  async getProductRequiredPoints(productIndex) {
    return parseInt((await (await this.#catalogSearch.productPrices)[productIndex].getText()).replace(/,/g, ''), 10);
  }
}
