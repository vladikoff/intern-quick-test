define([
  'intern!object',
  'intern/chai!assert'
], function (registerSuite) {

  registerSuite({
    name: 'suite1',

    testTrue: function () {
      return this.remote
        .get(require.toUrl('https://accounts.firefox.com'))
        .setFindTimeout(100000)

        .findByCssSelector('form input.email')
          .click()
          .type('some@email.com')
        .end()

        .findByCssSelector('form input.password')
          .click()
          .type('password')
        .end()

        .findByCssSelector('button[type="submit"]')
          .click()
        .end();
    }
  });
});
