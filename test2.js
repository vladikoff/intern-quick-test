define([
  'intern!object',
  'intern/chai!assert',
], function (registerSuite, assert) {
  var store;

  registerSuite({
    name: 'suite2',

        afterEach: function () {
      console.log('afterEach test2.js');
    },

    teardown: function () {
      console.log('teardown test2.js');
    },

    beforeEach: function () {
      console.log('beforeEach test2.js');
    },

    setup: function () {
      console.log('setup test2.js');
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