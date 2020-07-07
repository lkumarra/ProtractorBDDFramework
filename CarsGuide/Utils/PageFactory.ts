import { element, by, ElementFinder } from "protractor";
import { InvaildElementFinder } from "../Exception/InvalidElementFinder";
class PageFactory {
  /**
   * Return ElementFinder By Xpath.
   * @param locator  Xpath to find ElementFinder.
   * @returns ElementFinder using Xpath.
   */
  private static getElementFinderByXpath(locator: string): ElementFinder {
    return element(by.xpath(locator));
  }

  /**
   * Return ElementFinder By Css.
   * @param locator  Css to find ElementFinder.
   * @returns ElementFinder using Css.
   */
  private static getElementFinderByCss(locator: string): ElementFinder {
    return element(by.css(locator));
  }

  /**
   * Return ElementFinder By ClassName.
   * @param locator  ClassName to find ElementFinder.
   * @returns ElementFinder using ClassName.
   */
  private static getElementFinderByClass(locator: string): ElementFinder {
    return element(by.className(locator));
  }

  /**
   * Return ElementFinder By ID.
   * @param locator ID to find ElementFinder.
   * @returns ElementFinder using ID.
   */
  private static getElementFinderById(locator: string): ElementFinder {
    return element(by.id(locator));
  }

  /**
   * Return ElementFinder By Name.
   * @param locator Name to find ElementFinder.
   * @returns ElementFinder using Name.
   */
  private static getElementFinderByName(locator: string): ElementFinder {
    return element(by.name(locator));
  }

  /**
   * Return ElementFinder By LinkText.
   * @param locator LinkText to find ElementFinder.
   * @returns ElementFinder using LinkText.
   */
  private static getElementFinderByLinkText(locator: string): ElementFinder {
    return element(by.linkText(locator));
  }

  /**
   * Return ElementFinder By PartialLinkText.
   * @param locator PartialLinkText to find ElementFinder.
   * @returns ElementFinder using PartialLinkText.
   */
  private static getElementFinderByPartialLinkText(
    locator: string
  ): ElementFinder {
    return element(by.partialLinkText(locator));
  }

  /**
   * Return ElementFinder By Model.
   * @param locator Model to find ElementFinder.
   * @returns ElementFinder using Model.
   */
  private static getElementFinderByModel(locator: string): ElementFinder {
    return element(by.model(locator));
  }

  /**
   * Return ElementFinder By Binding.
   * @param locator Binding to find ElementFinder.
   * @returns ElementFinder using Binding.
   */
  private static getElementFinderByBinding(locator: string): ElementFinder {
    return element(by.binding(locator));
  }

  /**
   * Return ElementFinder using ExactBinding.
   * @param locator ExactBinding to find ElementFinder.
   * @returns ElementFinder using ExactBinding.
   */
  private static getElementFinderByExactBinding(
    locator: string
  ): ElementFinder {
    return element(by.exactBinding(locator));
  }

  /**
   * Return ElementFinder using Repeater.
   * @param locator Repeater to find ElementFinder.
   * @returns ElementFinder using Repeater.
   */
  private static getElementFinderByRepeater(locator: string): ElementFinder {
    return element(by.repeater(locator));
  }

  /**
   * Find element finder on the basis of element finder stretgy such as id, xpath, css, name etc.
   * @param how element stretgy such as id, xpath.
   * @param locator Locators for finding element finder.
   */
  public static findElementFinder(how: How, locator: string): ElementFinder {
    let webElement: ElementFinder;
    switch (how.toString()) {
      case "XPATH": {
        webElement = PageFactory.getElementFinderByXpath(locator);
        break;
      }
      case "CSS": {
        webElement = PageFactory.getElementFinderByCss(locator);
        break;
      }
      case "CLASS": {
        webElement = PageFactory.getElementFinderByClass(locator);
        break;
      }
      case "ID": {
        webElement = PageFactory.getElementFinderById(locator);
        break;
      }
      case "NAME": {
        webElement = PageFactory.getElementFinderByName(locator);
        break;
      }
      case "LINKTEXT": {
        webElement = PageFactory.getElementFinderByLinkText(locator);
        break;
      }
      case "PARTIALLINKTEXT": {
        webElement = PageFactory.getElementFinderByPartialLinkText(locator);
        break;
      }
      case "MODEL": {
        webElement = PageFactory.getElementFinderByModel(locator);
        break;
      }
      case "BINDING": {
        webElement = PageFactory.getElementFinderByBinding(locator);
        break;
      }
      case "EXACTBINDING": {
        webElement = PageFactory.getElementFinderByExactBinding(locator);
        break;
      }
      case "REPEATER": {
        webElement = PageFactory.getElementFinderByRepeater(locator);
        break;
      }
      default: {
        throw new InvaildElementFinder("Invalid ElementFinder Strategy");
      }
    }
    return webElement;
  }
}

export enum How {
  //#region Finding Strategy
  XPATH = "XPATH",
  ID = "ID",
  NAME = "NAME",
  CSS = "CSS",
  CLASS = "CLASS",
  MODEL = "MODEL",
  LINKTEXT = "LINKTEXT",
  PARTIALLINKTEXT = "PARTIALLINKTEXT",
  BINDING = "BINDING",
  EXACTBINDING = "EXACTBINDING",
  //#endregion
}

/**
 * Page factory implementation.
 * @param how element stretgy such as id, xpath.
 * @param locator Locators for finding element finder.
 */
export function findBy(how: How, selector: string) {
  return (target: any, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: function () {
        return PageFactory.findElementFinder(how, selector);
      },
    });
  };
}
