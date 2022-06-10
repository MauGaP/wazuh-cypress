import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, fillField, elementIsVisible, getAvailableElement} from '../../utils/driver';
import { addFilterButton, filterSuggestionList, filterOperatorList, filterParams, saveFilterButton, selectedOperator} from '../../pageobjects/filters/filters.page';
When('The user adds a new filter', () => {
  elementIsVisible(addFilterButton);
  clickElement(addFilterButton);
  fillField(filterSuggestionList,'rule.level');
  getAvailableElement(filterOperatorList);
  elementIsVisible(filterOperatorList);
  clickElement(filterOperatorList);
  elementIsVisible(selectedOperator);
  clickElement(selectedOperator);
  fillField(filterParams,'7');
  clickElement(saveFilterButton);
});
