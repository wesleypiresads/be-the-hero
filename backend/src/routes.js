const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/profileController');
const SessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Exportando as routes
module.exports = routes;
