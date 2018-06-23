Feature: Create Git Repo
  In order to check the create git repo execution endpoint
  As a developer
  I want to post to the execution endpoint and see that the expected results are returned

  Scenario Outline: crerate git repo execution checked
    When a user posts a payload for "<scenarioKey>" at uri "<uri>" - <description>
    Then the response produced for "<scenarioKey>" is as expected

    Examples:
      | scenarioKey                     | uri             | description                                   
      | create-git-repo-happy-path      | create-git-repo | the endpoint returns the expected response