const {
  Given,
  When,
  Then
} = require('cucumber');

const googlePage = require('../pageobjects/google-search.page')();

// *** belongs to Google search feature
When(/^I enter "([^"]*)" into the google search box$/, arg1 => {
  googlePage.enterText(arg1);
  googlePage.searchInput.getValue().should.equal(arg1);
});

When(/^I click on the enter key$/, () => {
  googlePage.enter();
});