import { Locator, by } from "protractor";
let usedCarLocators: UsedCarLocators;
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
  public getUsedCarsMakeDropdownLocator(): Locator {
    return this.usedCarsMakeDropdown;
  }

  /**
   * Return the locator of cars model dropdown on usedcars page.
   */
  public getUsedCarsModelDropdownLocator(): Locator {
    return this.usedCarsModelDropdown;
  }

  /**
   * Return the locator of cars location dropdown on usedcars page.
   */
  public getUsedCarsLocationDropdownLocator(): Locator {
    return this.usedCarsLocationDropdown;
  }

  /**
   * Return the locator of cars price dropdown loactor on usedcars page.
   */
  public getUsedCarsPriceDropdwonLocator(): Locator {
    return this.usedCarsPriceDropdwon;
  }

  /**
   * Return the locator of Find My Next Cars Button on used cars page.
   */
  public getUsedCarsSearchSubmitButtonLocator(): Locator {
    return this.usedCarsSearchSubmitButton;
  }
}
