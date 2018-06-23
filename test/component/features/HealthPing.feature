Feature: Service availability checks
  In order to check the availability of the service
  As a developer
  I want to check the ping endpoint

  Scenario: Checks the ping endpoint
    When engineering check the ping endpoint
    Then the health response is valid
