define([
  'intern!object',
  'intern/chai!assert',
], function (registerSuite, assert) {
  var store;

  registerSuite({
    name: 'suite3',

    afterEach: function () {
      console.log('afterEach test3.js');
    },

    teardown: function () {
      console.log('teardown test3.js');
    },

    beforeEach: function () {
      console.log('beforeEach test3.js');
    },

    setup: function () {
      console.log('setup test3.js');
    },

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