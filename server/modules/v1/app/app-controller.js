'use strict';


/**
 * AppController
 *
 * NodeJS version ES6
 * @category Assessment
 * 
 * @module
 * @author   Marcelo Rusconi <mgrusconi@gmail.com>
 *
 */


const jwt = require('jsonwebtoken');
const config = require('../../../config/');
const User = require('../../../models/Users');

class AppController {

  /**
   * Método que genera un token de accesso.
   * Method that generate access token.
   *
   * @param \ user
   * @return \Json
   */
  generateToken(user) {
    const { _id, roles } = user;
    return jwt.sign({ sub: _id, roles }, config.security.authJwtSecret);
  }

  /**
   * Método que valida un token de accesso.
   * Method that validate access token.
   *
   * @param \ req, res
   * @return \Json
   */
  validateToken(req, res) {
    try {
      const access_token = req.headers['access_token'];
      const validate = jwt.verify(access_token, config.security.authJwtSecret);
      return res.status(200).json({ 'token': validate });
    } catch (e) {
      return res.status(401).json({ 'message': 'Invalid token' })
    }
  }

  /**
   * Método que permite al usuario identificarse.
   * Method that allows the user to identify.
   *
   * @param \ req, res
   * @return \Json
   */
  registry(req, res) {
    const { email, password, roles } = req.body;
    User.create({ email, password, roles })
      .then((response) => {
        return res.status(200).json({ user_id: response._id });
      })
      .catch((err) => {
        console.log(err)
        return res.status(500).json({ err });
      });
  }

  /**
   * Método que permite al usuario identificarse.
   * Method that allows the user to identify.
   *
   * @param \ req, res, next
   * @return \Json
   */
  login(req, res) {
    const { email, password } = req.body;
    User.findOne({ email, password })
      .then((response) => {
        if (response !== null) {
          return res.status(200).json({
            'access_token': this.generateToken(response)
          });
        } else {
          return res.status(200).json([]);
        }
      })
      .catch((err) => {
        console.log(err)
        return res.status(500).json({ err });
      });
  }

}

module.exports = new AppController;