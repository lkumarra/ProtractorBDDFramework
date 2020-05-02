import { ElementFinder, ExpectedConditions, ProtractorExpectedConditions, browser, Locator, Key, by } from 'protractor';
let until: ProtractorExpectedConditions = ExpectedConditions;
let utilities: Utilities;
export class Utilities {

    /**
     * Return the instance of Utilities class.
     */
    public static getUtilitiesInstane(): Utilities {
        if (utilities == null) {
            utilities = new Utilities();
        }
        return utilities;
    }
    /**
     * Wait until element is in  clickable state.
     * @param element Element for which wait.
     */
    private async elementToBeClickableWait(element: ElementFinder) {
        await browser.wait(until.elementToBeClickable(element), 10000, "Element is not present on page limit was 10 second");
    }

    /**
     * Wait until a element is visible
     * @param element Element for which wait.
     */
    private async elementToBeVisibleWait(element: ElementFinder) {
        await browser.wait(until.visibilityOf(element), 10000, "Element is not present on page limit was 10 second");
    }

    /**
     * Return the element finder.
     * @param locator locator to find.
     */
    private async getElementFinder(locator: Locator): Promise<ElementFinder> {
        return await browser.element(locator);
    }

    /**
     * Perform click action on the locator
     * @param locator Locator on which click action has performed.
     */
    public async clickOnElement(locator: Locator) {
        let element: ElementFinder = await this.getElementFinder(locator);
        await this.elementToBeClickableWait(element);
        await element.click();
    }

    /**
     * Enter text on the locator.
     * @param locator Locator to enter the text
     * @param text Text to enter.
     */
    public async enterTextIntoElement(locator: Locator, text: string) {
        let element: ElementFinder = await this.getElementFinder(locator);
        await this.elementToBeClickableWait(element);
        await element.sendKeys(text);
    }

    /**
     * Enter text into locator after clear
     * @param locator Locator to enter the text
     * @param text Text to enter.
     */
    public async enterTextWithClear(locator: Locator, text: string) {
        let element: ElementFinder = await this.getElementFinder(locator);
        await this.elementToBeClickableWait(element);
        await element.clear();
        await element.sendKeys(text);
    }

    /**
     * Return the text of locator
     * @param locator Locator to get text.
     */
    public async getElementText(locator: Locator): Promise<string> {
        let element: ElementFinder = await this.getElementFinder(locator);
        await this.elementToBeVisibleWait(element);
        return element.getText();
    }

    /**
     * Select the value from dropdown.
     * @param locator locator to select
     * @param text value to select.
     */
    public async selectByVisibleText(locator: Locator, text: string) {
        await this.clickOnElement(locator);
        await this.clickOnElement(by.xpath("//option[text()='" + text + "']"))
    }

    /**
     * Perform mouse move funtion on the locator.
     * @param locator locator on which mouse move action has performed.
     */
    public async moveToElement(locator: Locator) {
        let element: ElementFinder = await this.getElementFinder(locator);
        await browser.actions().mouseMove(element).perform();
    }

    /**
     * Perform enter operation on locator
     * @param locator Locator on which action has performed.
     */
    public async pressENTER(locator: Locator) {
        let element: ElementFinder = await this.getElementFinder(locator);
        await element.sendKeys(Key.ENTER);
    }

    /**
     * Perform space operation on locator
     * @param locator Locator on which action has performed.
     */
    public async pressSPACE(locator: Locator) {
        let element: ElementFinder = await this.getElementFinder(locator);
        await element.sendKeys(Key.SPACE);
    }
}