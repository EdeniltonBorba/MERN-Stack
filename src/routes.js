const express = require('express');
const Users = require('./controllers/users.controller');

const routes = express.Router();

routes.get('/', Users.index);
routes.post('/api/users', Users.create);

module.exports = routes;