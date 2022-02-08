import { BasePage } from '@pages/base.page';
import { StoreTravelBookingsPageElements } from './travel-bookings.element';

export class StoreTravelBookingsPage extends BasePage {
  #travelBookings = new StoreTravelBookingsPageElements();
}
