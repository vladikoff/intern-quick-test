define([
  'intern!object',
  'intern/chai!assert',
], function (registerSuite, assert) {
  var store;

  registerSuite({
    name: 'test1',

    testTrue: function () {
      var dfd = this.async(5000);
      setTimeout(function () {
        assert.isTrue(true);
        dfd.resolve();
      }, 2000);
      return dfd;
    },
  });
});