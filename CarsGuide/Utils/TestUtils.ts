import {
  ElementFinder,
  ExpectedConditions,
  ProtractorExpectedConditions,
  browser,
  Locator,
  Key,
  by,
} from "protractor";
let until: ProtractorExpectedConditions = ExpectedConditions;
let utilities: Utilities;
import * as chai from "chai";
const expect = chai.expect;
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
    await browser.wait(
      until.elementToBeClickable(element),
      10000,
      "Element is not present on page limit was 10 second"
    );
  }

  /**
   * Wait until a element is visible
   * @param element Element for which wait.
   */
  private async elementToBeVisibleWait(element: ElementFinder) {
    await browser.wait(
      until.visibilityOf(element),
      10000,
      "Element is not present on page limit was 10 second"
    );
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
    await this.clickOnElement(
      by.xpath(await this.getXpathByText("option", text))
    );
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

  /**
   * Return the xpath from text
   * @param text text to design xpath
   */
  public async getXpathByText(tagName: string, text: string): Promise<string> {
    let xpath: string = "//" + tagName + "[text()='" + text + "']";
    return xpath;
  }

  /**
   * Make xpath
   * @param tagName Tag name to design xpath
   * @param attribute Attribute name
   * @param value attribute alue
   */
  public async makeXpath(tagName: string, attribute: string, value: string) {
    let xpath: string = "//" + tagName + "[@" + attribute + "='" + value + "']";
    return xpath;
  }

  /**
   * Verify the actual and expected value.
   * @param actual Actual value.
   * @param expected Expected value.
   */
  public static async verifyEquals(actual: string, expected: string) {
    expect(actual).to.equal(expected, "Incorrect value is displayed");
  }

  /**
   * Verify the actual and expected value.
   * @param actal Actual value.
   * @param expected Expected value.
   */
  public static veifyEquals(actal: number, expected: number) {
    expect(actal).to.equal(expected);
  }

  /**
   * Verify the given value is true.
   * @param value value to verify
   */
  public static verifyTrue(value: boolean) {
    expect(value).to.true;
  }

  /**
   * Verify the given value is false.
   * @param value vale to verify.
   */
  public static verifyFalse(value: boolean) {
    expect(value).to.false;
  }

  /**
   * Return the title of the given page.
   */
  public static async getTitle(): Promise<string> {
    return await browser.getTitle();
  }
}
