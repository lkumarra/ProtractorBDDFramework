import { ElementFinder } from "protractor";
import { findBy, How } from "../../Utils/PageFactory";

export class HomePageLocators {
  private static _instance: HomePageLocators = new HomePageLocators();
  /**
   * Return the instance of HomePageLocators page.
   */
  public static getHomePageLocatorInstance(): HomePageLocators {
    return this._instance;
  }

  //#region PageFactory

  @findBy(How.XPATH, "//a[@data-gtm-label = 'top nav car buy and sell']")
  private _buySellMenu: ElementFinder;

  @findBy(How.LINKTEXT, "reviews")
  private _reviewsMenu: ElementFinder;

  @findBy(How.LINKTEXT, "news")
  private _newsMenu: ElementFinder;

  @findBy(How.LINKTEXT, "news")
  private _adviceMenu: ElementFinder;

  @findBy(How.LINKTEXT, "pricing + specs")
  private _priceAndSpecMenu: ElementFinder;

  @findBy(How.LINKTEXT, "guides")
  private _guidesMenu: ElementFinder;

  @findBy(How.LINKTEXT, "Search Cars")
  private _searchCarsMenu: ElementFinder;

  @findBy(How.LINKTEXT, "Used")
  private _userCarMenu: ElementFinder;

  //#endregion

  //#region  GetterMethods

  /**
   * Return the locator of buy+sell menu on carsguide home page.
   */
  public getBuySellMenuLocator(): ElementFinder {
    return this._buySellMenu;
  }

  /**
   * Return the locator of reviews menu on carsguide home page.
   */
  public getReviewsMenuLocator(): ElementFinder {
    return this._reviewsMenu;
  }

  /**
   * Return the locator of news menu on carsguide home page.
   */
  public getNewsMenuLocator(): ElementFinder {
    return this._newsMenu;
  }

  /**
   * Return the locator of advice menu on cars guide home page.
   */
  public getAdviceMenuLocator(): ElementFinder {
    return this._adviceMenu;
  }

  /**
   * Return the locator of price and spec menu on cars guide home page.
   */
  public getPriceAndSpecMenuLocator(): ElementFinder {
    return this._priceAndSpecMenu;
  }

  /**
   * Return the locator of guides menu on cars guide home page.
   */
  public getGuidesMenuLocator(): ElementFinder {
    return this._guidesMenu;
  }

  /**
   * Return the locator of search menu on cars guide home page.
   */
  public getSearchCarsMenuLocator(): ElementFinder {
    return this._searchCarsMenu;
  }

  /**
   * Return the locator of used cars menu on cars guide home page.
   */
  public getUsedCarsMenuLocator(): ElementFinder {
    return this._userCarMenu;
  }

  //#endregion
}
