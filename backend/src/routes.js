const express = require('express');

const ongController = require('./crontollers/OngController');
const IncidentController = require('./crontollers/IncidentController');
const ProfileController = require('./crontollers/IncidentController');
const SessionController = require('./crontollers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', ongController.index); 
routes.post('/ongs', ongController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;