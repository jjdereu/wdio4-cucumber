import Page from './page';

class GooglePage extends Page {

    get searchInput() {
        return browser.element('input.gLFyf');
    }

    get searchButton() {
        return browser.element('[value="Google zoeken"]');
    }

    get resultsList() {
        return browser.element('#rcnt');
    }

    open() {
        super.open('https://google.nl');
        browser.pause(1000);
    }

    enterText(item) {
        this.searchInput.clearElement();
        this.searchInput.setValue(item);
        browser.pause(1000);
    }

    search() {
        this.searchButton.click();
    }

    enter() {
        browser.keys("\uE007");
    }

    isSearched() {
        this.resultsList.waitForVisible(1000);
        return this.resultsList.isVisible();
    }


}

module.exports = () => new GooglePage();