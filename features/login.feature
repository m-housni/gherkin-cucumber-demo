Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters "testuser@example.com" and "password123"
    And clicks on the login button
    Then the user should see the dashboard

  Scenario: Login with invalid credentials
    Given the user is on the login page
    When the user enters "wronguser@example.com" and "wrongpassword"
    And clicks on the login button
    Then an error message should be displayed
