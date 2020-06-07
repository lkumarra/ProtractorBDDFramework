import { browser } from "protractor";
import { After, Status } from "cucumber";
After(function (testCase) {
  var me = this;
  if (testCase.result.status === Status.FAILED) {
    return browser.takeScreenshot().then(function (screenshot) {
      return me.attach(screenshot, "image/png");
    });
  }
});
