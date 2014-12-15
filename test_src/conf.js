// An example configuration file.
exports.config = {
  //directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    //'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    'phantomjs.cli.args': ['--loglevel=DEBUG', '--logfile=phantom.log']
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test1_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
