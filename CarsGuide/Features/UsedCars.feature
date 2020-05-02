@Used-Search-Cars
Feature: Acceptance testing to validate used cars page is working fine
    In order to validate that
    the used cars page is working fine
    we will do the acceptance testing

    Background:
        Given I am on the Hompe Page "https://www.carsguide.com.au/" of cars guide website to test used search cars
        When I move to menu to select used cars
            | Menu          |
            | buy+sell      |
            | reviews       |
            | news          |
            | advice        |
            | pricing+specs |
            | guides        |

    @Used-Search-Cars-Positive
    Scenario: Validate search cars page
        And I click on "Used Car" link on buy and sell menu
        And I select  "Audi" as brand
        And I select  "A4" as model
        And I select  "ACT - All" as location
        And I select  "$100,000" as price
        And I click on "Find My Next Car" Button on used search cars
        Then I should see list of searched cars on used search car
        And The page title should be "Used Audi A4 Under 100000 for Sale ACT | carsguide" of used searched car
