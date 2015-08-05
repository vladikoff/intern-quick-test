define([
  'intern!object',
  'intern/chai!assert',
], function (registerSuite, assert) {
  var store;

  registerSuite({
    name: 'suite1',

    afterEach: function () {
      console.log('afterEach test1.js');
      alert('afterEach test1.js');
    },

    teardown: function () {
      alert('teardown test1.js');
      console.log('teardown test1.js');
    },

    beforeEach: function () {
      console.log('beforeEach test1.js');
    },

    setup: function () {
      console.log('setup test1.js');
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