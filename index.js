const { onWindow, decorateTerms, decorateMenu } = require('./itermPaneShortcuts.js');
const cursor = require('./cursor.js');
const monokai = require('./monokaiTheme.js');

module.exports = {
  onWindow,
  decorateTerms,
  decorateMenu,
  decorateConfig : config => {
    const step1 = cursor(config);
    const step2 = monokai(step1);
    return step2;
  }
}
