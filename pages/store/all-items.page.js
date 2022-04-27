import { BasePage } from '@page/base.page';
import { StoreAllItemsPageElements } from './all-items.element';

export class StoreAllItemsPage extends BasePage {
  #allItems = new StoreAllItemsPageElements();
}
