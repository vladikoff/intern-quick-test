define([
  'intern!object',
  'intern/chai!assert'
], function (registerSuite) {

  registerSuite({
    name: 'suite1',

    testTrue: function () {
      return this.remote
        .get(require.toUrl('http://mozilla.org'))
        .execute('location.reload();');
    }
  });
});
