import { Utilities } from "../../Utils/TestUtils";
import { SearchCarsLocators } from "../Locators/CarsGuideSearchCarsLocators";
import { LogUtils } from "../../LogManager/LogUtils";

export class SearchCarsActions {
  private _utilities: Utilities = Utilities.getUtilitiesInstane();
  private _searchCarsLocators: SearchCarsLocators = SearchCarsLocators.getSearchCarsLocatorsInstance();
  /**
   * Select cars make,
   * @param carsMake Cars make to select.
   */
  public async selectSearchCarMake(carsMake: string) {
    await this._utilities.selectByVisibleText(
      this._searchCarsLocators.getSerchCarsMakeDropdownLocator(),
      carsMake
    );
    LogUtils.debugMessage(
      "Car Make " + carsMake + " is selected",
      SearchCarsActions.name
    );
  }

  /**
   * Select search car model,
   * @param model Car model to select.
   */
  public async selectSerchCarModel(model: string) {
    await this._utilities.selectByVisibleText(
      this._searchCarsLocators.getSearchCarsModelDropdownLocator(),
      model
    );
    LogUtils.debugMessage(
      "Car model " + model + " is selected",
      SearchCarsActions.name
    );
  }

  /**
   * Select search car location
   * @param location location to select.
   */
  public async selectSearchCarLocation(location: string) {
    await this._utilities.selectByVisibleText(
      this._searchCarsLocators.getSeachCarsLocationDropdownLocator(),
      location
    );
    LogUtils.debugMessage(
      "Car location " + location + " is selected",
      SearchCarsActions.name
    );
  }

  /**
   * Select search car price.
   * @param price Price to select.
   */
  public async selectSearchCarPrice(price: string) {
    await this._utilities.selectByVisibleText(
      this._searchCarsLocators.getSearchCarsPriceDropdwonLocator(),
      price
    );
    LogUtils.debugMessage(
      "Car price " + price + " is selected",
      SearchCarsActions.name
    );
  }

  /**
   * Click on find ny next car.
   */
  public async clickOnFindMyNextCar() {
    await this._utilities.clickOnElement(
      this._searchCarsLocators.getSearchCarsSearchSubmitButtonLocator()
    );
    LogUtils.debugMessage(
      "Clicked on Find My Next Car",
      SearchCarsActions.name
    );
  }
}
