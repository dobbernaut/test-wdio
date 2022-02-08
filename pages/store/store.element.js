export class StorePageElements {
  get allItemsTab() {
    return $('a[title="All items"]');
  }
  get storeDealsTab() {
    return $('a[title="Store deals"]');
  }
  get travelBookingsTab() {
    return $('a[title="Travel bookings"]');
  }
  get searchBox() {
    return $('input[id="search"]');
  }
  get searchButton() {
    return $('button[title="Search"]');
  }
}
