import { BasePage } from '@page/flybuys/base.page';
import { StoreCatalogSearchPage } from './catalog-search.page';
import { StorePageElements } from './store.element';
import { StoreTravelBookingsPage } from './travel-bookings.page';

export class StorePage extends BasePage {
  #store = new StorePageElements();

  #travelBookings = new StoreTravelBookingsPage();
  #catalogSearch = new StoreCatalogSearchPage();

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
