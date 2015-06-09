define([
  'intern!object',
  'intern/chai!assert',
], function (registerSuite, assert) {
  var store;

  registerSuite({
    name: 'test1',

    testTrue: function () {
      assert.isTrue(true);
    },
  });
});