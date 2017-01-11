const { onWindow, decorateTerms, decorateMenu } = require('./itermPaneShortcuts.js');
const cursor = require('./cursor.js');
const monokai = require('./monokaiTheme.js');

module.exports = {
  onWindow,
  decorateTerms,
  decorateMenu,
  decorateConfig : config => {
    const step1 = cursor.decorateConfig(config);
    const step2 = monokai.decorateConfig(step1);
    return step2;
  }
}
