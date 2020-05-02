import { browser } from "protractor";
import { LogUtils } from '../LogManager/LogUtils';
export class TestBase{

    /**
     * Perform initialization to start testing.
     */
    private static async initialization(){
        await browser.manage().window().maximize();
        LogUtils.debugMessage("Window is maximizes", TestBase.name);
        await browser.manage().deleteAllCookies();
        LogUtils.debugMessage("All cookies are deleted", TestBase.name);
    }

    /**
     * Enter the url 
     * @param url Url to enter.
     */
    public static async getUrl(url:string){
        await browser.waitForAngularEnabled(false);
        await browser.get(url);
        LogUtils.debugMessage("Url "+url+ " is launched", TestBase.name);
        await TestBase.initialization();
    }
}