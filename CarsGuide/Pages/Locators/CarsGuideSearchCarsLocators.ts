import { ElementFinder } from "protractor";
import { findBy, How } from "../../Utils/PageFactory";

export class SearchCarsLocators {
  private static _instance: SearchCarsLocators = new SearchCarsLocators();

  /**
   * Return the instance of SearchCarsLocators page.
   */
  public static getSearchCarsLocatorsInstance(): SearchCarsLocators {
    return this._instance;
  }

  //#region  PageFactory

  @findBy(How.CSS, "#makes")
  private _serchCarsMakeDropdown: ElementFinder;

  @findBy(How.CSS, "#models")
  private _searchCarsModelDropdown: ElementFinder;

  @findBy(How.CSS, "#locations")
  private _seachCarsLocationDropdown: ElementFinder;

  @findBy(How.CSS, "#priceTo")
  private _searchCarsPriceDropdwon: ElementFinder;

  @findBy(How.CSS, "#search-submit")
  private _searchCarsSearchSubmitButton: ElementFinder;

  //#endregion

  //#region  GetterMethods

  /**
   * Return the locator of cars make dropdown on searchcars page.
   */
  public getSerchCarsMakeDropdownLocator(): ElementFinder {
    return this._serchCarsMakeDropdown;
  }

  /**
   * Return the locator of cars model dropdown on searchcars page.
   */
  public getSearchCarsModelDropdownLocator(): ElementFinder {
    return this._searchCarsModelDropdown;
  }

  /**
   * Return the locator of cars location dropdown on searchcars page.
   */
  public getSeachCarsLocationDropdownLocator(): ElementFinder {
    return this._seachCarsLocationDropdown;
  }

  /**
   * Return the locator of cars price dropdown loactor on searchcars page.
   */
  public getSearchCarsPriceDropdwonLocator(): ElementFinder {
    return this._searchCarsPriceDropdwon;
  }

  /**
   * Return the locator of Find My Next Cars Button on search cars page.
   */
  public getSearchCarsSearchSubmitButtonLocator(): ElementFinder {
    return this._searchCarsSearchSubmitButton;
  }

  //#endregion
}
