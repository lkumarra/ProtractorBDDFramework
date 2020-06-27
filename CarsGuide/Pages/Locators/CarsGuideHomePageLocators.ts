import { ElementFinder } from "protractor";
import { findBy, How } from '../../Utils/PageFactory';

let homePageLocators: HomePageLocators;

export class HomePageLocators {
  /**
   * Return the instance of HomePageLocators page.
   */
  public static getHomePageLocatorInstance(): HomePageLocators {
    if (homePageLocators == null) {
      homePageLocators = new HomePageLocators();
    }
    return homePageLocators;
  }

  //#region PageFactory

  @findBy(How.XPATH, "//a[@data-gtm-label = 'top nav car buy and sell']")
  private buySellMenu: ElementFinder;

  @findBy(How.LINKTEXT, "reviews")
  private reviewsMenu: ElementFinder;

  @findBy(How.LINKTEXT, "news")
  private newsMenu: ElementFinder;

  @findBy(How.LINKTEXT, "news")
  private adviceMenu: ElementFinder;

  @findBy(How.LINKTEXT, "pricing + specs")
  private priceAndSpecMenu: ElementFinder;

  @findBy(How.LINKTEXT, "guides")
  private guidesMenu: ElementFinder;

  @findBy(How.LINKTEXT, "Search Cars")
  private searchCarsMenu: ElementFinder;

  @findBy(How.LINKTEXT, "Used")
  private userCarMenu: ElementFinder;

  //#endregion

  //#region  GetterMethods

  /**
   * Return the locator of buy+sell menu on carsguide home page.
   */
  public getBuySellMenuLocator(): ElementFinder {
    return this.buySellMenu;
  }

  /**
   * Return the locator of reviews menu on carsguide home page.
   */
  public getReviewsMenuLocator(): ElementFinder {
    return this.reviewsMenu;
  }

  /**
   * Return the locator of news menu on carsguide home page.
   */
  public getNewsMenuLocator(): ElementFinder {
    return this.newsMenu;
  }

  /**
   * Return the locator of advice menu on cars guide home page.
   */
  public getAdviceMenuLocator(): ElementFinder {
    return this.adviceMenu;
  }

  /**
   * Return the locator of price and spec menu on cars guide home page.
   */
  public getPriceAndSpecMenuLocator(): ElementFinder {
    return this.priceAndSpecMenu;
  }

  /**
   * Return the locator of guides menu on cars guide home page.
   */
  public getGuidesMenuLocator(): ElementFinder {
    return this.guidesMenu;
  }

  /**
   * Return the locator of search menu on cars guide home page.
   */
  public getSearchCarsMenuLocator(): ElementFinder {
    return this.searchCarsMenu;
  }

  /**
   * Return the locator of used cars menu on cars guide home page.
   */
  public getUsedCarsMenuLocator(): ElementFinder {
    return this.userCarMenu;
  }

  //#endregion
}
