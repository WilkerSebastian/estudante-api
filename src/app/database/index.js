const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Estudantes = require("../models/Estudantes")

const connection = new Sequelize(dbConfig);

Estudantes.init(connection)

module.exports = connection;