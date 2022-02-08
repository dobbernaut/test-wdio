export class StoreCatalogSearchPageElements {
  get numberOfSearchItems() {
    return $('[itemprop="numberOfItems"]');
  }
  get itemsList() {
    return $('.ais-Hits-list');
  }
  get items() {
    return $$('.ais-Hits-item');
  }
  get products() {
    return $$('[itemprop="itemListElement"]');
  }
  get productUrls() {
    return $$('[itemprop="url"]');
  }
  get productNames() {
    return $$('[itemprop="name"]');
  }
  get productPrices() {
    return $$('[itemprop="lowPrice"]');
  }
}
