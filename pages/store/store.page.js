import { BasePage } from '@page/base.page';
import { StoreAllItemsPage } from './all-items.page';
import { StoreCatalogSearchPage } from './catalog-search.page';
import { StoreDealsPage } from './store-deals.page';
import { StorePageElements } from './store.element';
import { StoreTravelBookingsPage } from './travel-bookings.page';

export class StorePage extends BasePage {
  #store = new StorePageElements();

  #allItems = new StoreAllItemsPage();
  #storeDeals = new StoreDealsPage();
  #travelBookings = new StoreTravelBookingsPage();
  #catalogSearch = new StoreCatalogSearchPage();

  get allItems() {
    return this.#allItems;
  }
  get storeDeals() {
    return this.#storeDeals;
  }
  get travelBookings() {
    return this.#travelBookings;
  }
  get catalogSearch() {
    return this.#catalogSearch;
  }

  async openAllItems() {
    await this.#store.allItemsTab.click();
  }

  async openStoreDeals() {
    await this.#store.storeDealsTab.click();
  }

  async openTravelBookings() {
    await this.#store.travelBookingsTab.click();
  }

  async searchTheFlybuysStore(search) {
    await this.#store.searchBox.setValue(search);
    await this.#store.searchButton.click();
  }
}
