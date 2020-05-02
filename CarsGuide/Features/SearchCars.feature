@Search-Cars
Feature: Acceptance testing to validate Search cars page is working fine
    In order to validate that
    the search cars page is working fine
    we will do the acceptance testing

    @Search-Cars-Positive
    Scenario: Validate search cars page
        Given I am on the Hompe Page "https://www.carsguide.com.au/" of cars guide website
        When I move to menu
            | Menu          |
            | buy+sell      |
            | reviews       |
            | news          |
            | advice        |
            | pricing+specs |
            | guides        |
        And I click on "Search Car" link
        And I select Make as "BMW Alpina"
        And I select model as "B5"
        And I select location as "ACT - All"
        And I select price as "$100,000"
        And I click on "Find My Next Car" Button
        Then I should see list of searched cars
        And The page title should be "Bmw Alpina B5 Under 100000 for Sale ACT | carsguide"
