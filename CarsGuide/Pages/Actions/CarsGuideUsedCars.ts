import { Utilities } from "../../Utils/TestUtils";
import { UsedCarLocators } from "../Locators/CarsGuideUsesCarsLocators";
import { LogUtils } from "../../LogManager/LogUtils";

export class UsedCarAction {
  private _utilities: Utilities = Utilities.getUtilitiesInstane();
  private _usedCarLocators: UsedCarLocators = UsedCarLocators.getUsedCarLocatorInstance();
  /**
   * Select car make on used car page.
   * @param make Make to select.
   */
  public async selectUsedCarMake(make: string) {
    await this._utilities.selectByVisibleText(
      this._usedCarLocators.getUsedCarsMakeDropdownLocator(),
      make
    );
    LogUtils.debugMessage(
      "Car Make " + make + " is selected",
      UsedCarAction.name
    );
  }

  /**
   * Select car model on used car page.
   * @param model Model to select.
   */
  public async selectUsedCarModel(model: string) {
    await this._utilities.selectByVisibleText(
      this._usedCarLocators.getUsedCarsModelDropdownLocator(),
      model
    );
    LogUtils.debugMessage(
      "Car Model " + model + " is selected",
      UsedCarAction.name
    );
  }

  /**
   * Select car location on used car page.
   * @param location location to select.
   */
  public async selectUsedCarLocation(location: string) {
    await this._utilities.selectByVisibleText(
      this._usedCarLocators.getUsedCarsLocationDropdownLocator(),
      location
    );
    LogUtils.debugMessage(
      "Car location " + location + " is selected",
      UsedCarAction.name
    );
  }

  /**
   * Select car price on used car page.
   * @param price price to select.
   */
  public async seletUsedCarPrice(price: string) {
    await this._utilities.selectByVisibleText(
      this._usedCarLocators.getUsedCarsPriceDropdwonLocator(),
      price
    );
    LogUtils.debugMessage(
      "Car price " + price + " is selected",
      UsedCarAction.name
    );
  }

  /**
   * Click on find my next car on used car page.
   */
  public async clickOnFindMyNextCar() {
    await this._utilities.clickOnElement(
      this._usedCarLocators.getUsedCarsSearchSubmitButtonLocator()
    );
    LogUtils.debugMessage("Clicked on Find My Next Car", UsedCarAction.name);
  }
}
