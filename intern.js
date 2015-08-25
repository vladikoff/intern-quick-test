define([
  'intern'
],
function (intern) {
  var args = intern.args;

  var config = {
    proxyPort: 10232,
    proxyUrl: 'http://localhost:10232',
    suites: [],
    functionalSuites: ['testfunc1'],
    environments: [{browserName: 'firefox'}],
    excludeInstrumentation: true,
    tunnelOptions: {
      pathname: '/'
    },
    capabilities: {}
  };

  // custom Firefox binary location, if specified then the default is ignored.
  // ref: https://code.google.com/p/selenium/wiki/DesiredCapabilities#WebDriver
  if (args.firefoxBinary) {
    config.capabilities.firefox_binary = args.firefoxBinary; //eslint-disable-line camelcase
  }

  return config;
});
