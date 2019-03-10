Feature: Performing a Google Search

    As a user on the Google search page
    I want to search for Selenium-Webdriver
    Because I want to learn more about it

    Background:

        Given I am on the google search page

    Scenario: Performing a search operation
        When I enter "Selenium Webdriver" into the google search box
        And I click on the enter key
        Then I should see a list of google search results