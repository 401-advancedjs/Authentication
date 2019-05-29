'use strict';

/**
 * Handles 404 error
 * @modules 404
 */

/**
 * Handles status 404 errors
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * 
 */
module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};