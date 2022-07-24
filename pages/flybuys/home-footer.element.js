export class HomePageFooterElements {
  get searchBox() {
    return $('footer form[class*="search"] input');
  }
  get searchButton() {
    return $('footer button[type="submit"]');
  }
}
