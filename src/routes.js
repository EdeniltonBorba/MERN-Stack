const express = require('express');
const Users = require('./controllers/users.controller');

const routes = express.Router();

routes.get('/', Users.index);

//user routes
routes.post('/api/users', Users.create);
routes.get('/api/users', Users.index);
routes.get('/api/users/details/:_id', Users.details);
routes.delete('/api/users/:_id', Users.delete);

module.exports = routes;