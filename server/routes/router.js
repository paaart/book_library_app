const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add Books
 *  @method GET /add-book
 */
route.get('/add-book', services.add_book)

/**
 *  @description for update book
 *  @method GET /update-book
 */
route.get('/update-book', services.update_book)


// API
route.post('/api/books', controller.create);
route.get('/api/books', controller.find);
route.put('/api/books/:id', controller.update);
route.delete('/api/books/:id', controller.delete);


module.exports = route