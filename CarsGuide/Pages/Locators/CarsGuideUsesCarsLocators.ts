import { ElementFinder } from "protractor";
import { findBy, How } from "../../Utils/PageFactory";

export class UsedCarLocators {
  private static _instance: UsedCarLocators = new UsedCarLocators();
  /**
   * Return the instance of UsedCarLocators page.
   */
  public static getUsedCarLocatorInstance(): UsedCarLocators {
    return this._instance;
  }

  //#region  PageFactoory

  @findBy(How.CSS, "#makes")
  private _usedCarsMakeDropdown: ElementFinder;

  @findBy(How.CSS, "#models")
  private _usedCarsModelDropdown: ElementFinder;

  @findBy(How.CSS, "#locations")
  private _usedCarsLocationDropdown: ElementFinder;

  @findBy(How.CSS, "#priceTo")
  private _usedCarsPriceDropdwon: ElementFinder;

  @findBy(How.CSS, "#search-submit")
  private _usedCarsSearchSubmitButton: ElementFinder;

  //#endregion

  //#region  GetterMethods

  /**
   * Return the locator of cars make dropdown on usedcars page.
   */
  public getUsedCarsMakeDropdownLocator(): ElementFinder {
    return this._usedCarsMakeDropdown;
  }

  /**
   * Return the locator of cars model dropdown on usedcars page.
   */
  public getUsedCarsModelDropdownLocator(): ElementFinder {
    return this._usedCarsModelDropdown;
  }

  /**
   * Return the locator of cars location dropdown on usedcars page.
   */
  public getUsedCarsLocationDropdownLocator(): ElementFinder {
    return this._usedCarsLocationDropdown;
  }

  /**
   * Return the locator of cars price dropdown loactor on usedcars page.
   */
  public getUsedCarsPriceDropdwonLocator(): ElementFinder {
    return this._usedCarsPriceDropdwon;
  }

  /**
   * Return the locator of Find My Next Cars Button on used cars page.
   */
  public getUsedCarsSearchSubmitButtonLocator(): ElementFinder {
    return this._usedCarsSearchSubmitButton;
  }

  //#endregion
}
