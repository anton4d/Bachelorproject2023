const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB, process.env.DBUser, process.env.DBPassword, {
    dialect: 'mysql',
    host: process.env.DBHost,
    port: process.env.DBPort
});

module.exports = sequelize;