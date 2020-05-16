import { Utilities } from '../../Utils/TestUtils';
import { UsedCarLocators } from '../Locators/CarsGuideUsesCarsLocators';
import { LogUtils } from '../../LogManager/LogUtils';
let utilities: Utilities = Utilities.getUtilitiesInstane();
let usedCarLocators: UsedCarLocators = UsedCarLocators.getUsedCarLocatorInstance();
export class UsedCarAction {

    /**
     * Select car make on used car page.
     * @param make Make to select.
     */
    public async selectUsedCarMake(make: string) {
        await utilities.selectByVisibleText(usedCarLocators.getUsedCarsMakeDropdownLocator(), make);
        LogUtils.debugMessage("Car Make " + make + " is selected", UsedCarAction.name);
    }

    /**
     * Select car model on used car page.
     * @param model Model to select.
     */
    public async selectUsedCarModel(model: string) {
        await utilities.selectByVisibleText(usedCarLocators.getUsedCarsModelDropdownLocator(), model);
        LogUtils.debugMessage("Car Model " + model + " is selected", UsedCarAction.name);
    }

    /**
     * Select car location on used car page. 
     * @param location location to select.
     */
    public async selectUsedCarLocation(location: string) {
        await utilities.selectByVisibleText(usedCarLocators.getUsedCarsLocationDropdownLocator(), location);
        LogUtils.debugMessage("Car location " + location + " is selected", UsedCarAction.name);
    }

    /**
     * Select car price on used car page.
     * @param price price to select.
     */
    public async seletUsedCarPrice(price: string) {
        await utilities.selectByVisibleText(usedCarLocators.getUsedCarsPriceDropdwonLocator(), price);
        LogUtils.debugMessage("Car price " + price + " is selected", UsedCarAction.name);
    }

    /**
     * Click on find my next car on used car page.
     */
    public async clickOnFindMyNextCar() {
        await utilities.clickOnElement(usedCarLocators.getUsedCarsSearchSubmitButtonLocator());
        LogUtils.debugMessage("Clicked on Find My Next Car", UsedCarAction.name);
    }
}