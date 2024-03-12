import assert from 'assert';
import { Meteor } from 'meteor/meteor';

// Helps Vite with initial dependency optimization
// This module is loaded at runtime, so we have to include it manually once
// for it to be optimized prior to the first load of the application
import 'meteor-vite/client';

import './methods/traces';
import './methods/markers';
import './methods/activities';
import './methods/petshared';
import './methods/animal';
import './methods/comments';
import './methods/routes';
import './methods/connect';
import './methods/tracking';

//import './views/ViewActivityAdd';
//import './Vue/vuex';

if (Meteor.isServer) {
  Accounts.createUser({
    username: 'UserName',
    email: 'ste.monnier@gmail.com',
    password: 'EEEE',
    profile: {
      firstname: 'Stéphane',
      lastname: 'Monnier'
    }
  });
}

describe('General', function () {
  it('package.json has correct name', async function () {
    const { name } = await import('../package.json');
    assert.strictEqual(name, 'vuegpx');
  });

  if (Meteor.isClient) {
    it('client is not server', function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it('server is not client', function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
