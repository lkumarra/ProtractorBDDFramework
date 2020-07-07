import { Utilities } from "../../Utils/TestUtils";
import { HomePageLocators } from "../Locators/CarsGuideHomePageLocators";
import { SearchCarsActions } from "./CarsGuideSearchCars";
import { UsedCarAction } from "./CarsGuideUsedCars";
import { LogUtils } from "../../LogManager/LogUtils";

export class HomePageActions {
  private _utilities: Utilities = Utilities.getUtilitiesInstane();
  private _homePageLocatos: HomePageLocators = HomePageLocators.getHomePageLocatorInstance();

  /**
   * Move to buy+sell menu.
   */
  public async moveToBuyAndSale() {
    await this._utilities.moveToElement(
      this._homePageLocatos.getBuySellMenuLocator()
    );
    LogUtils.debugMessage("Move to buy+sale Menu", HomePageActions.name);
  }

  /**
   * Move to reviews menu.
   */
  public async moveToReviews() {
    await this._utilities.moveToElement(
      this._homePageLocatos.getReviewsMenuLocator()
    );
    LogUtils.debugMessage("Move to reviews Menu", HomePageActions.name);
  }

  /**
   * Move to news menu.
   */
  public async moveToNews() {
    await this._utilities.moveToElement(
      this._homePageLocatos.getNewsMenuLocator()
    );
    LogUtils.debugMessage("Move to news Menu", HomePageActions.name);
  }

  /**
   * Move to advice menu.
   */
  public async moveToAdvice() {
    await this._utilities.moveToElement(
      this._homePageLocatos.getAdviceMenuLocator()
    );
    LogUtils.debugMessage("Move to advice Menu", HomePageActions.name);
  }

  /**
   * Move to pricing and spec menu.
   */
  public async moveToPricingAndSpec() {
    await this._utilities.moveToElement(
      this._homePageLocatos.getPriceAndSpecMenuLocator()
    );
    LogUtils.debugMessage(
      "Move to pricing and spec Menu",
      HomePageActions.name
    );
  }

  /**
   * Move to advice.
   */
  public async moveToGuides() {
    await this._utilities.moveToElement(
      this._homePageLocatos.getGuidesMenuLocator()
    );
    LogUtils.debugMessage("Move to guides Menu", HomePageActions.name);
  }

  /**
   * click on search cars options .
   */
  public async clickOnSearchCars(): Promise<SearchCarsActions> {
    await this._utilities.clickOnElement(
      this._homePageLocatos.getSearchCarsMenuLocator()
    );
    LogUtils.debugMessage("Clicked on Search cars", HomePageActions.name);
    return new SearchCarsActions();
  }

  /**
   * Click on used car menu.
   */
  public async clickOnUsedCars(): Promise<UsedCarAction> {
    LogUtils.debugMessage("Clicked on used cars", HomePageActions.name);
    await this._utilities.clickOnElement(
      this._homePageLocatos.getUsedCarsMenuLocator()
    );
    return new UsedCarAction();
  }
}
