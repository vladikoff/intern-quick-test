define([
  'intern!object',
  'intern/chai!assert',
], function (registerSuite, assert) {
  var store;

  registerSuite({
    name: 'suite1',

    testTrue: function () {
      var dfd = this.async(20000);
      setTimeout(function () {
        assert.isTrue(true);
        dfd.resolve();
      }, 10000);
      return dfd;
    },
  });
});