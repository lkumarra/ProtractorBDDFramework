import { Locator, by } from "protractor";
let homePageLocators:HomePageLocators;
export class HomePageLocators {

    /**
     * Return the instance of HomePageLocators page.
     */
    public static getHomePageLocatorInstance():HomePageLocators{
        if(homePageLocators == null){
            homePageLocators = new HomePageLocators();
        }
        return homePageLocators;
    }

    private buySellMenu: Locator = by.xpath("//a[@data-gtm-label = 'top nav car buy and sell']");
    private reviewsMenu: Locator = by.linkText("reviews");
    private newsMenu: Locator = by.linkText("news");
    private adviceMenu: Locator = by.linkText("advice");
    private priceAndSpecMenu: Locator = by.linkText("pricing + specs");
    private guidesMenu: Locator = by.linkText("guides");
    private searchCarsMenu: Locator = by.linkText("Search Cars");
    private usedCarsMenu: Locator = by.linkText("Used");

    /**
     * Return the locator of buy+sell menu on carsguide home page.
     */
    public getBuySellMenuLocator(): Locator {
        return this.buySellMenu;
    }

    /**
     * Return the locator of reviews menu on carsguide home page.
     */
    public getReviewsMenuLocator(): Locator {
        return this.reviewsMenu;
    }

    /**
     * Return the locator of news menu on carsguide home page.
     */
    public getNewsMenuLocator(): Locator {
        return this.newsMenu
    }

    /**
     * Return the locator of advice menu on cars guide home page.
     */
    public getAdviceMenuLocator(): Locator {
        return this.adviceMenu;
    }

    /**
     * Return the locator of price and spec menu on cars guide home page.
     */
    public getPriceAndSpecMenuLocator(): Locator {
        return this.priceAndSpecMenu;
    }

    /**
     * Return the locator of guides menu on cars guide home page.
     */
    public getGuidesMenuLocator(): Locator {
        return this.guidesMenu;
    }

    /**
     * Return the locator of search menu on cars guide home page.
     */
    public getSearchCarsMenuLocator(): Locator {
        return this.searchCarsMenu;
    }

    /**
     * Return the locator of used cars menu on cars guide home page.
     */
    public getUsedCarsMenuLocator(): Locator {
        return this.usedCarsMenu;
    }

}