import { clickElement, elementIsVisible, getSelector } from '../../../utils/driver';

import { WAZUH_MENU_PAGE as pageName, MODULES_CARDS} from '../../../utils/pages-constants';
const modulesButton = getSelector('modulesButton', pageName);
const modulesDirectoryLink = getSelector('modulesDirectoryLink', pageName);
const wazuhMenuButton = getSelector('wazuhMenuButton', pageName);

Then('The activated modules with {} are displayed on home page', (moduleName) => {
  elementIsVisible(wazuhMenuButton);
  clickElement(wazuhMenuButton);
  elementIsVisible(modulesButton);
  clickElement(modulesButton);
  elementIsVisible(modulesDirectoryLink);
  clickElement(modulesDirectoryLink);
  elementIsVisible(getSelector(moduleName, MODULES_CARDS));
});
