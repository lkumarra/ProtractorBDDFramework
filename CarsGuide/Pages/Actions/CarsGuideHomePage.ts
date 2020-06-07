import { Utilities } from "../../Utils/TestUtils";
import { HomePageLocators } from "../Locators/CarsGuideHomePageLocators";
import { SearchCarsActions } from "./CarsGuideSearchCars";
import { UsedCarAction } from "./CarsGuideUsedCars";
import { LogUtils } from "../../LogManager/LogUtils";
let utilities: Utilities = Utilities.getUtilitiesInstane();
let homePageLocatos: HomePageLocators = HomePageLocators.getHomePageLocatorInstance();
export class HomePageActions {
  /**
   * Move to buy+sell menu.
   */
  public async moveToBuyAndSale() {
    await utilities.moveToElement(homePageLocatos.getBuySellMenuLocator());
    LogUtils.debugMessage("Move to buy+sale Menu", HomePageActions.name);
  }

  /**
   * Move to reviews menu.
   */
  public async moveToReviews() {
    await utilities.moveToElement(homePageLocatos.getReviewsMenuLocator);
    LogUtils.debugMessage("Move to reviews Menu", HomePageActions.name);
  }

  /**
   * Move to news menu.
   */
  public async moveToNews() {
    await utilities.moveToElement(homePageLocatos.getNewsMenuLocator());
    LogUtils.debugMessage("Move to news Menu", HomePageActions.name);
  }

  /**
   * Move to advice menu.
   */
  public async moveToAdvice() {
    await utilities.moveToElement(homePageLocatos.getAdviceMenuLocator());
    LogUtils.debugMessage("Move to advice Menu", HomePageActions.name);
  }

  /**
   * Move to pricing and spec menu.
   */
  public async moveToPricingAndSpec() {
    await utilities.moveToElement(homePageLocatos.getPriceAndSpecMenuLocator());
    LogUtils.debugMessage(
      "Move to pricing and spec Menu",
      HomePageActions.name
    );
  }

  /**
   * Move to advice.
   */
  public async moveToGuides() {
    await utilities.moveToElement(homePageLocatos.getGuidesMenuLocator());
    LogUtils.debugMessage("Move to guides Menu", HomePageActions.name);
  }

  /**
   * click on search cars options .
   */
  public async clickOnSearchCars(): Promise<SearchCarsActions> {
    await utilities.clickOnElement(homePageLocatos.getSearchCarsMenuLocator());
    LogUtils.debugMessage("Clicked on Search cars", HomePageActions.name);
    return new SearchCarsActions();
  }

  /**
   * Click on used car menu.
   */
  public async clickOnUsedCars(): Promise<UsedCarAction> {
    LogUtils.debugMessage("Clicked on used cars", HomePageActions.name);
    await utilities.clickOnElement(homePageLocatos.getUsedCarsMenuLocator());
    return new UsedCarAction();
  }
}
