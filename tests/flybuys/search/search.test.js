import { StatusCode } from '@constant/http-response-codes';
import { HomePage } from '@page/flybuys/home.page';
import { StorePage } from '@page/flybuys/store/store.page';
import { BlogPosts } from '@service/sample-api';
import { expect } from 'chai';

describe('Flybuys store search', () => {
  const home = new HomePage();
  const store = new StorePage();

  const searchItem = 'headphones';

  describe('From the footer search box', () => {
    it('should return search item results', async () => {
      await home.open();
      await home.footer.searchTheFlybuysStore(searchItem);

      const numberOfItems = await store.catalogSearch.getNumberOfSearchItems();
      expect(numberOfItems).to.be.greaterThan(0);

      const items = await store.catalogSearch.getSearchItems();
      items.forEach((item) => {
        expect(item.name).to.include(searchItem);
      });
    });
  });

  describe('From the Flybuys store search box', () => {
    // We will import here a service for an api as an example
    // to see how we can use services and clients.
    // This is not limited to http services, we can import client libraries
    // to access aws services, or kafka as an example.
    const blogPost = new BlogPosts();

    it('should return search item results', async () => {
      await home.open();
      await home.header.openFlybuysStore();
      await store.searchTheFlybuysStore(searchItem);

      const numberOfItems = await store.catalogSearch.getNumberOfSearchItems();
      expect(numberOfItems).to.be.greaterThan(0);

      const items = await store.catalogSearch.getSearchItems();
      items.forEach((item) => {
        expect(item.name).to.include(searchItem);
      });

      // We are calling a service here. And then console logging the results
      await blogPost.getAllPosts().then((response) => {
        expect(response.status).to.equal(StatusCode.Ok);
        const blogPosts = response.data;
        // Yes! we can use console.log :)
        console.log(blogPosts[0]);
        blogPosts.forEach((post) => {
          expect(post).to.have.property('id');
        });
      });
    });
  });
});
