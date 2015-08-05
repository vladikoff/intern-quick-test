define({
  proxyPort: 10232,
  proxyUrl: 'http://localhost:10232',
  suites: ['test1', 'test2', 'test3'],
  reporters: [ 'Runner', 'Console' ],
  functionalSuites: [],
  environments: [ { browserName: 'firefox' }],
  excludeInstrumentation: true
});
