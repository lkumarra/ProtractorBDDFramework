import { element, by, ElementFinder } from "protractor";

/**
 * This function will return element finder the basis of how
 * @param how Element finder strategy
 * @param locator Locator
 */
function findElementFinder(how: string, locator: string): ElementFinder {
  let webElement: ElementFinder;
  switch (how.toUpperCase()) {
    case "XPATH": {
      webElement = element(by.xpath(locator));
      break;
    }
    case "CSS": {
      webElement = element(by.css(locator));
      break;
    }
    case "ID": {
      webElement = element(by.id(locator));
      break;
    }
    case "NAME": {
      webElement = element(by.name(locator));
      break;
    }
    case "LINKTEXT": {
      webElement = element(by.linkText(locator));
      break;
    }
    case "PARTIALLINKTEXT": {
      webElement = element(by.partialLinkText(locator));
      break;
    }
    case "NGMODEL": {
      webElement = element(by.model(locator));
      break;
    }
  }
  return webElement;
}

/**
 * Page Factory Decorator
 * @param how Element Finder strategy
 * @param selector Selector
 */
export function findBy(how: string, selector: string) {
  return (target: any, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: function () {
        return findElementFinder(how, selector);
      },
    });
  };
}
