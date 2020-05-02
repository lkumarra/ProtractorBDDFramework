import { Locator, by } from 'protractor';
let searchCarsLocators: SearchCarsLocators;
export class SearchCarsLocators {

    /**
     * Return the instance of SearchCarsLocators page.
     */
    public static getSearchCarsLocatorsInstance(): SearchCarsLocators {
        if (searchCarsLocators == null) {
            searchCarsLocators = new SearchCarsLocators();
        }
        return searchCarsLocators;
    }

    private serchCarsMakeDropdown: Locator = by.css("#makes");
    private searchCarsModelDropdown: Locator = by.css("#models");
    private seachCarsLocationDropdown: Locator = by.css("#locations");
    private searchCarsPriceDropdwon: Locator = by.css("#priceTo");
    private searchCarsSearchSubmitButton: Locator = by.css("#search-submit");

    /**
     * Return the locator of cars make dropdown on searchcars page.
     */
    public serchCarsMakeDropdownLocator(): Locator {
        return this.serchCarsMakeDropdown;
    }

    /**
     * Return the locator of cars model dropdown on searchcars page.
     */
    public searchCarsModelDropdownLocator(): Locator {
        return this.searchCarsModelDropdown;
    }

    /**
     * Return the locator of cars location dropdown on searchcars page.
     */
    public seachCarsLocationDropdownLocator(): Locator {
        return this.seachCarsLocationDropdown;
    }

    /**
     * Return the locator of cars price dropdown loactor on searchcars page.
     */
    public searchCarsPriceDropdwonLocator(): Locator {
        return this.searchCarsPriceDropdwon;
    }

    /**
     * Return the locator of Find My Next Cars Button on search cars page.
     */
    public searchCarsSearchSubmitButtonLocator(): Locator {
        return this.searchCarsSearchSubmitButton;
    }
}