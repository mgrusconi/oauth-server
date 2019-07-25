'use strict';

/**
 * App Router
 *
 * @module
 * @author Marcelo Rusconi <mgrusconi@gmail.com>
 */

const Router = require('express');
const controller = require('./app-controller');

const router = new Router();

/**
* @swagger
* definitions:
*   registry:
*     type: object
*     required:
*       - email
*       - password
*       - roles
*     properties:
*       email:
*         type: string
*         default: "manningblankenship@quotezart.com"
*         description: e-mail User
*       password:
*         type: string
*         default: "manningblankenship"
*         description: Password
*       roles:
*         type: array
*         items: string
*         description: Roles list
*/

/**
* @swagger
* definitions:
*   login:
*     type: object
*     required:
*       - email
*       - password
*     properties:
*       email:
*         type: string
*         default: "manningblankenship@quotezart.com"
*         description: e-mail User
*       password:
*         type: string
*         default: "manningblankenship"
*         description: Password
*/

/**
* @swagger
* definitions:
*   response_registry:
*     type: object
*     properties:
*       user_id:
*         type: string
*         default: "manningblankenship@quotezart.com"
*         description: e-mail User
*/

/**
 * @swagger
 * /app/registry:
 *   post:
 *     tags:
 *       - API v1
 *     summary: Registry user.
 *     description: Method that registry an user.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Profile
 *         required: true
 *         schema:
 *           $ref: '#/definitions/registry'
 *       - name: x-key
 *         in: header
 *         description: API key
 *         required: true
 *         type: string
 *         format: string
 *         default: 2fvTdG53VCp6z8ZbV66h
 *     responses:
 *       200:
 *         schema:
 *           $ref: '#/definitions/response_registry'
 */
router.route('/registry').post((...args) => controller.registry(...args));

/**
 * @swagger
 * /app/login:
 *   post:
 *     tags:
 *       - API v1
 *     summary: Login user.
 *     description: Method that allows the user to identify.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Profile
 *         required: true
 *         schema:
 *           $ref: '#/definitions/login'
 *       - name: x-key
 *         in: header
 *         description: API key
 *         required: true
 *         type: string
 *         format: string
 *         default: 2fvTdG53VCp6z8ZbV66h
 *     responses:
 *       200:
 *         description: Profile created!
 */
router.route('/login').post((...args) => controller.login(...args));

/**
 * @swagger
 * /app/token/validate:
 *   get:
 *     tags:
 *       - API v1
 *     summary: Validate Access Token
 *     description: Method that validate an Access Token.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: x-key
 *         in: header
 *         description: API key
 *         required: true
 *         type: string
 *         format: string
 *         default: 2fvTdG53VCp6z8ZbV66h
 *       - name: access_token
 *         in: header
 *         description: User Token JWT
 *         type: string
 *         format: string
 *         default:
 *     responses:
 *       200:
 *         description: app!
 *         schema:
 *           $ref: ''
 */

router.route('/token/validate').get((...args) => controller.validateToken(...args));

module.exports = router;