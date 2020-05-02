import { Given, When, Then, setDefaultTimeout } from 'cucumber';
import { TestBase } from '../TestBase/TestBase';
import { HomePageActions } from '../Pages/Actions/CarsGuideHomePage';
import { SearchCarsActions } from '../Pages/Actions/CarsGuideSearchCars';
let searchCarsActions: SearchCarsActions;
let homePageActions: HomePageActions = new HomePageActions();
setDefaultTimeout(60 * 1000);

Given('I am on the Hompe Page {string} of cars guide website', async (url: string) => {
    await TestBase.getUrl(url);
});

When('I move to menu', async (dataTable) => {
    await homePageActions.moveToBuyAndSale();
});

When('I click on {string} link', async (string) => {
    searchCarsActions = await homePageActions.clickOnSearchCars();
});

When('I select Make as {string}', async (make: string) => {
    await searchCarsActions.selectSearchCarMake(make);
});

When('I select model as {string}', async (model: string) => {
    await searchCarsActions.selectSerchCarModel(model);
});

When('I select location as {string}', async (location: string) => {
    await searchCarsActions.selectSearchCarLocation(location);
});

When('I select price as {string}', async (price: string) => {
    await searchCarsActions.selectSearchCarPrice(price)
});

When('I click on {string} Button', async (string) => {
    await searchCarsActions.clickOnFindMyNextCar()
});

Then('I should see list of searched cars', () => {

});

Then('The page title should be {string}', (string) => {

});
