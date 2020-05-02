import { Locator, by } from "protractor";
let usedCarLocators: UsedCarLocators
export class UsedCarLocators {

    /**
    * Return the instance of UsedCarLocators page.
    */
    public static getUsedCarLocatorInstance(): UsedCarLocators {
        if (usedCarLocators == null) {
            usedCarLocators = new UsedCarLocators();
        }
        return usedCarLocators;
    }

    private usedCarsMakeDropdown: Locator = by.css("#makes");
    private usedCarsModelDropdown: Locator = by.css("#models");
    private usedCarsLocationDropdown: Locator = by.css("#locations");
    private usedCarsPriceDropdwon: Locator = by.css("#priceTo");
    private usedCarsSearchSubmitButton: Locator = by.css("#search-submit");

    /**
     * Return the locator of cars make dropdown on usedcars page.
     */
    public usedCarsMakeDropdownLocator(): Locator {
        return this.usedCarsMakeDropdown;
    }

    /**
     * Return the locator of cars model dropdown on usedcars page.
     */
    public usedCarsModelDropdownLocator(): Locator {
        return this.usedCarsModelDropdown;
    }

    /**
     * Return the locator of cars location dropdown on usedcars page.
     */
    public usedCarsLocationDropdownLocator(): Locator {
        return this.usedCarsLocationDropdown;
    }

    /**
     * Return the locator of cars price dropdown loactor on usedcars page.
     */
    public usedCarsPriceDropdwonLocator(): Locator {
        return this.usedCarsPriceDropdwon;
    }

    /**
     * Return the locator of Find My Next Cars Button on used cars page.
     */
    public usedCarsSearchSubmitButtonLocator(): Locator {
        return this.usedCarsSearchSubmitButton;
    }
}