'use strict';

require('dotenv').config();

/**
 * Modulo que contiene las llaves de seguridad.
 * Module containing the security keys.
 *
 * @module
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

module.exports = {
  security: {
    api_key: '2fvTdG53VCp6z8ZbV66h',
    authJwtSecret: process.env.AUTH_JWT_SECRET,
    private_key: 'S=p$G?`HQ?H_V{K6C#^^&8f3f/c~3T.C'
  }
};