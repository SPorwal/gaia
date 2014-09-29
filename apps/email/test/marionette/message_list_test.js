'use strict';

var Email = require('./lib/email');
var assert = require('assert');
var serverHelper = require('./lib/server_helper');

marionette('email message list edit mode', function() {
  var app;

  var client = marionette.client({
    settings: {
      // disable keyboard ftu because it blocks our display
      'keyboard.ftu.enabled': false,
      'ftu.manifestURL': null,
      'lockscreen.enabled': false
    }
  });

  var server = serverHelper.use(null, this);

  setup(function() {
    app = new Email(client);
    app.launch();
    app.manualSetupImapEmail(server);
    app.sendAndReceiveMessages([
      { to: 'testy@localhost', subject: 'Only One Lonely', body: 'Fish' }
    ]);
  });

  test('trash is disabled when no selected messages', function() {
    assert.ok(true);
    app.editMode();
    app.isEditModeTrashDisabled();
  });

});
