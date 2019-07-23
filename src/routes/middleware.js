'use strict';
/**
 * Verify Token
 * @module
 */

const jwt = require('jsonwebtoken');

/**
 * Verifies crypto JSON Web Token
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
module.exports = (req, res, next) => {
  const token = req.headers.cookie.split('=')[1];
  return jwt.verify(token, process.env.SECRET, (error, decoded)=> {
    if(error) {
      return res.json({
        message: 'Please sign in',
      });
    }else{
      req.id = decoded.id;
      next();
    }
  });
};