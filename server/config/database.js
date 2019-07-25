'use strict';

/**
 * Modulo que contiene los recursos expernos.
 * Module containing the external resources.
 *
 * @module
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

module.exports = {
  database:{
    mongo: {
      host: 'mongo',
      port: 27017,
      db: 'oauth-server',
      users: 'root',
      pass: 'root'
    }
  }
};