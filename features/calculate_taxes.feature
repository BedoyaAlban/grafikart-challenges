Feature: The appliction to calculate the taxes

    The App should calculate taxes

    Scenario: Single person with 32OOO
        Given a family composed of 1 part and has an income of 32000
        When he uses the app
        Then taxes should be 3617

    Scenario: Couple with 2 childrens and with 55000
        Given a family composed of 3 parts and has an income of 55950
        When he uses the app
        Then taxes should be 2833
