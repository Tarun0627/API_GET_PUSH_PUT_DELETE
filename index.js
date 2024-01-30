require('dotenv').config();
const App = require('./app/');
const Server = new App();
Server.startServer();