Feature: Using the app to calculate the incomes from the taxes


    The user use the app and enter the amount of taxes to pay and retrieve the amount of Income to have


    Scenario: Single person would like to pay 3617
        Given a family composed of 1 part and would like to pay 3617 of taxes
        When He uses the app
        Then Income should be 32000

