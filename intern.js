define({
  proxyPort: 10232,
  proxyUrl: 'http://localhost:10232',
  suites: ['test1', 'test2'],
  reporters: [ 'teamcity' ],
  functionalSuites: [],
  environments: [ { browserName: 'firefox' }],
  excludeInstrumentation: true
});
