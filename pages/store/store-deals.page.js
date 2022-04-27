import { BasePage } from '@page/base.page';
import { StoreDealsPageElements } from './store-deals.element';

export class StoreDealsPage extends BasePage {
  #deals = new StoreDealsPageElements();
}
