export class BasePage {
  async open() {
    await browser.url('');
  }

  async getPageTitle() {
    return await browser.getTitle();
  }

  async getPageUrl() {
    return await browser.getUrl();
  }
}
