'use strict';

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  return jwt.verify(req.headers.auth, process.env.SECRET).then(valid => {
    if(valid.id){
      next();
    }
  }).catch(error => console.error(error));
};