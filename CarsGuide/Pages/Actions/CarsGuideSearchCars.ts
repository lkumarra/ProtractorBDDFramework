import { Utilities } from '../../Utils/TestUtils';
import { SearchCarsLocators } from '../Locators/CarsGuideSearchCarsLocators';
import { LogUtils } from '../../LogManager/LogUtils';
let utilities: Utilities = Utilities.getUtilitiesInstane();
let searchCarsLocators: SearchCarsLocators = SearchCarsLocators.getSearchCarsLocatorsInstance();
export class SearchCarsActions {

    /**
     * Select cars make,
     * @param carsMake Cars make to select.
     */
    public async selectSearchCarMake(carsMake: string) {
        await utilities.selectByVisibleText(searchCarsLocators.getSerchCarsMakeDropdownLocator(), carsMake);
        LogUtils.debugMessage("Car Make " + carsMake + " is selected", SearchCarsActions.name);
    }

    /**
     * Select search car model,
     * @param model Car model to select.
     */
    public async selectSerchCarModel(model: string) {
        await utilities.selectByVisibleText(searchCarsLocators.getSearchCarsModelDropdownLocator(), model);
        LogUtils.debugMessage("Car model " + model + " is selected", SearchCarsActions.name);
    }

    /**
     * Select search car location
     * @param location location to select.
     */
    public async selectSearchCarLocation(location: string) {
        await utilities.selectByVisibleText(searchCarsLocators.getSeachCarsLocationDropdownLocator(), location);
        LogUtils.debugMessage("Car location " + location + " is selected", SearchCarsActions.name);
    }

    /**
     * Select search car price.
     * @param price Price to select.
     */
    public async selectSearchCarPrice(price: string) {
        await utilities.selectByVisibleText(searchCarsLocators.getSearchCarsPriceDropdwonLocator(), price);
        LogUtils.debugMessage("Car price " + price + " is selected", SearchCarsActions.name);
    }

    /**
     * Click on find ny next car.
     */
    public async clickOnFindMyNextCar() {
        await utilities.clickOnElement(searchCarsLocators.getSearchCarsSearchSubmitButtonLocator());
        LogUtils.debugMessage("Clicked on Find My Next Car", SearchCarsActions.name);
    }


}