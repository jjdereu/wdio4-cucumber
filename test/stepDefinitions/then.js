const {
  Given,
  When,
  Then
} = require('cucumber');

const googlePage = require('../pageobjects/google-search.page')();

// *** belongs to Google serch feature
Then(/^I should see a list of google search results$/, () => {
  googlePage.isSearched().should.be.true;
});