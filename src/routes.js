const express = require('express');

const Users = require('./controllers/users.controller');
const Product = require('./controllers/product.controller');

const routes = express.Router();

routes.get('/', Users.index);

//user routes
routes.post('/api/users', Users.create);
routes.get('/api/users', Users.index);
routes.get('/api/users/details/:_id', Users.details);
routes.delete('/api/users/:_id', Users.delete);
routes.put('/api/users', Users.update);

//Product routes
routes.post('/api/product', Product.create);
routes.get('/api/product', Product.index);
routes.get('/api/product/details/:_id', Product.details);
routes.delete('/api/product/:_id', Product.delete);
routes.put('/api/product', Product.update);

module.exports = routes;