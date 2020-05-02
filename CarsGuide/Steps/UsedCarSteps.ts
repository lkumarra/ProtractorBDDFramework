import { Given, When, Then, setDefaultTimeout } from 'cucumber';
import { HomePageActions } from '../Pages/Actions/CarsGuideHomePage';
import { UsedCarAction } from '../Pages/Actions/CarsGuideUsedCars';
import { TestBase } from '../TestBase/TestBase';
import { browser } from 'protractor';
import * as chai from 'chai';
const expect = chai.expect;
let homePageActions: HomePageActions = new HomePageActions();
let usedCarAction: UsedCarAction;
setDefaultTimeout(60 * 1000);

Given('I am on the Hompe Page {string} of cars guide website to test used search cars', async (url: string) => {
    await TestBase.getUrl(url);
});

When('I move to menu to select used cars', async (dataTable) => {
    await homePageActions.moveToBuyAndSale();
});

When('I click on {string} link on buy and sell menu', async (string) => {
    usedCarAction = await homePageActions.clickOnUsedCars();
});

When('I select  {string} as brand', async (make: string) => {
    await usedCarAction.selectUsedCarMake(make);
});


When('I select  {string} as model', async (model: string) => {
    await usedCarAction.selectUsedCarModel(model);
});

When('I select  {string} as location', async (loation: string) => {
    await usedCarAction.selectUsedCarLocation(loation);
});

When('I select  {string} as price', async (price: string) => {
    await usedCarAction.seletUsedCarPrice(price);
});

When('I click on {string} Button on used search cars', async (string) => {
    await usedCarAction.clickOnFindMyNextCar();
});

Then('I should see list of searched cars on used search car', async () => {

});

Then('The page title should be {string} of used searched car', async (title:string) => {
    expect(await browser.getTitle()).to.equal(title)
});