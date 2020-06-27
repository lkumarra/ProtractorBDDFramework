import { ElementFinder } from "protractor";
import { findBy, How } from '../../Utils/PageFactory';

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

  //#region  PageFactoory

  @findBy(How.CSS, "#makes")
  private usedCarsMakeDropdown: ElementFinder;

  @findBy(How.CSS, "#models")
  private usedCarsModelDropdown: ElementFinder;

  @findBy(How.CSS, "#locations")
  private usedCarsLocationDropdown: ElementFinder;

  @findBy(How.CSS, "#priceTo")
  private usedCarsPriceDropdwon: ElementFinder;

  @findBy(How.CSS, "#search-submit")
  private usedCarsSearchSubmitButton: ElementFinder;

  //#endregion

  //#region  GetterMethods

  /**
   * Return the locator of cars make dropdown on usedcars page.
   */
  public getUsedCarsMakeDropdownLocator(): ElementFinder {
    return this.usedCarsMakeDropdown;
  }

  /**
   * Return the locator of cars model dropdown on usedcars page.
   */
  public getUsedCarsModelDropdownLocator(): ElementFinder {
    return this.usedCarsModelDropdown;
  }

  /**
   * Return the locator of cars location dropdown on usedcars page.
   */
  public getUsedCarsLocationDropdownLocator(): ElementFinder {
    return this.usedCarsLocationDropdown;
  }

  /**
   * Return the locator of cars price dropdown loactor on usedcars page.
   */
  public getUsedCarsPriceDropdwonLocator(): ElementFinder {
    return this.usedCarsPriceDropdwon;
  }

  /**
   * Return the locator of Find My Next Cars Button on used cars page.
   */
  public getUsedCarsSearchSubmitButtonLocator(): ElementFinder {
    return this.usedCarsSearchSubmitButton;
  }

  //#endregion
}
