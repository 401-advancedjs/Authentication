'use strict';

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.cookie.split('=')[1];
  return jwt.verify(token, process.env.SECRET, (error, decoded)=> {
    if(error) {
      return res.json({
        message: 'inside error',
      });
    }else{
      req.id = decoded.id;
      next();
    }
  });
};