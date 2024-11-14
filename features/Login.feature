Feature: Logging in

    @probando
    Scenario Outline: Scenario Outline for login

        Given Im on the right page

        When I fill the form with my <Email> and my <Password> and <Tenant> optional

        Then I should see the dashboard page

        Examples:
            | Email  | Password             |  Tenant  |
            | admin  | 2600Admin$uper99     |  SUPER99 |
           