Feature: Create Interaction Contract
  In order to check the create interaction contracy execution endpoint
  As a developer
  I want to post to the execution endpoint and see that the expected results are returned

  Scenario Outline: crerate git repo execution checked
    When a user posts a payload for "<scenarioKey>" at uri "<uri>" - <description>
    Then the response produced for "<scenarioKey>" is as expected

    Examples:
      | scenarioKey                     | uri                         | description                                   
      | create-contract-happy-path      | create-interaction-contract | the endpoint returns the expected response