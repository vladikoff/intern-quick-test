define({
  proxyPort: 10232,
  proxyUrl: 'http://localhost:10232',
  suites: [],
  functionalSuites: [ 'testfunc1'],
  environments: [ { browserName: 'firefox' }],
  excludeInstrumentation: true,
  tunnelOptions: {
    pathname: '/'
  }
});
