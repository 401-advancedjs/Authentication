![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Authentication

### Author: Melissa Stock and Jagdeep Singh

### Links and Resources
* [submission PR](https://github.com/401-advancedjs/authentication/pull/1)
* [travis](https://www.travis-ci.com/401-advancedjs/Authentication)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `src/auth/middlware.js`

Authenticates username and password

#### `src/auth/router.js`

Express router for `/signin` and `/signup` routes

#### `src/auth/users-model.js`

Users mongoose schema.

#### `src/middleware/404.js`

Not found error handler.

#### `src/middleware/error.js`

Server error handler.

#### `src/routes/books.js`

Express router for `/books` and `/books/:id` routes.

#### `src/routes/middleware.js`

Verifies access token, `req.headers.cookie`.

#### `src/app.js`

Server application module to tie it all together.
Exports object, `{ server, start }`


### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db
* `SECRET` - key for used for crypto algorithms

#### Running the app
* `npm start`
* Endpoint: `/signup`
  * Returns a JSON object with a token in it representing the new account.
* Endpoint: `/signin`
  * Returns a JSON object with success message in it.
* Endpoinrt: `books`
  * Returns a JSON object with the selected books in it.
  
#### Tests
* How do you run tests? `npm test`
* What assertions were made? 
  * Successfully creates new user
  * Successfully logs in
  * Successfully hits all middleware
* What assertions need to be / should be made?
  * No other assertions required

#### UML
![Authentication UML](auth_img.jpg) 
