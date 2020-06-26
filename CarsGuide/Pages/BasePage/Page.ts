import { browser } from "protractor";
import { LogUtils } from "../../LogManager/LogUtils";
export class Page {
  /**
   * Perform initialization to start testing.
   */
  private static async initialization() {
    await browser.manage().window().maximize();
    LogUtils.debugMessage("Window is maximizes", Page.name);
    await browser.manage().deleteAllCookies();
    LogUtils.debugMessage("All cookies are deleted", Page.name);
  }

  /**
   * Enter the url
   * @param url Url to enter.
   */
  public static async getUrl(url: string) {
    await browser.waitForAngularEnabled(false);
    await browser.get(url);
    LogUtils.debugMessage("Url " + url + " is launched", Page.name);
    await Page.initialization();
  }
}
