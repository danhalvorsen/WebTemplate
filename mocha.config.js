const { JSDOM } = require('jsdom');

module.exports = {
  require: 'ts-mocha',
  ui: 'bdd',
  reporter: 'spec',
  globals: {
    window: new JSDOM().window,
    document: new JSDOM().window.document
  }
};
