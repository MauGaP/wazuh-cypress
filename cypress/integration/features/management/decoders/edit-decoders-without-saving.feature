Feature: Should Displayes a warning modal

  As a kibana user
  i want to edit a custom rule
  in order to check if the warning no saving toast is displayed.

@rules
  Scenario: Validate confirmation when closing modal without saving - Management - edit decoders
    Given The kibana admin user is logged and the wazuh logo is displayed
    When The user navigates to decoders
    And The user clicks the custom decoders button
    And The user selects a custom decoders to edit
    And The user modify the selected decoders
    And The user tries to exit create decoders page without saving data
    Then The informative modal is displayed
    