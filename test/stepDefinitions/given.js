const {
  Given,
  When,
  Then
} = require('cucumber');

const googlePage = require('../pageobjects/google-search.page')();

// *** belongs to Google serch feature
Given(/^I am on the google search page$/, () => {
  googlePage.open();
  browser.getTitle().should.equal('Google');
});