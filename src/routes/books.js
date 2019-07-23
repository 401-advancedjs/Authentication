'use strict';
/**
 * Express router for book routes
 * @module
 */

const express = require('express');
const router = express.Router();
const verifyToken = require('./middleware.js');

router.use(verifyToken);
router.get('/books', handleGetAll);
router.get('/books/:id', handleGetOne);

// Route Handlers
/**
 * Gets all the books
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
function handleGetAll(req, res, next) {
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

/**
 * Get a specific books
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;
