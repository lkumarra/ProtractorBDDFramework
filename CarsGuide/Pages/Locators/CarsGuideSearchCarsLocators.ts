import { ElementFinder } from "protractor";
import { findBy, How } from '../../Utils/PageFactory';

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

  //#region  PageFactory

  @findBy(How.CSS, "#makes")
  private serchCarsMakeDropdown: ElementFinder;

  @findBy(How.CSS, "#models")
  private searchCarsModelDropdown: ElementFinder;

  @findBy(How.CSS, "#locations")
  private seachCarsLocationDropdown: ElementFinder;

  @findBy(How.CSS, "#priceTo")
  private searchCarsPriceDropdwon: ElementFinder;

  @findBy(How.CSS, "#search-submit")
  private searchCarsSearchSubmitButton: ElementFinder;

  //#endregion

  //#region  GetterMethods

  /**
   * Return the locator of cars make dropdown on searchcars page.
   */
  public getSerchCarsMakeDropdownLocator(): ElementFinder {
    return this.serchCarsMakeDropdown;
  }

  /**
   * Return the locator of cars model dropdown on searchcars page.
   */
  public getSearchCarsModelDropdownLocator(): ElementFinder {
    return this.searchCarsModelDropdown;
  }

  /**
   * Return the locator of cars location dropdown on searchcars page.
   */
  public getSeachCarsLocationDropdownLocator(): ElementFinder {
    return this.seachCarsLocationDropdown;
  }

  /**
   * Return the locator of cars price dropdown loactor on searchcars page.
   */
  public getSearchCarsPriceDropdwonLocator(): ElementFinder {
    return this.searchCarsPriceDropdwon;
  }

  /**
   * Return the locator of Find My Next Cars Button on search cars page.
   */
  public getSearchCarsSearchSubmitButtonLocator(): ElementFinder {
    return this.searchCarsSearchSubmitButton;
  }

  //#endregion
}
