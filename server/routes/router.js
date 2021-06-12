const express = require ('express');
const route = express.Router();
const controller = require('../controllers/controller');

// Conexión al controlador
route.get('/users', controller.find);
route.get('/users/:id', controller.findOne);
route.post('/users', controller.create);
route.put('/users/:id', controller.update);
route.delete('/users/:id', controller.delete);


module.exports = route;