define([
  'intern!object',
  'intern/chai!assert',
], function (registerSuite, assert) {
  var store;

  registerSuite({
    name: 'suite2',

    testTrue: function () {
      var dfd = this.async(10000);
      setTimeout(function () {
        assert.isTrue(true);
        dfd.resolve();
      }, 5000);
      return dfd;
    },
  });
});