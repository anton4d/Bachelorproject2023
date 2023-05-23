const { Sequelize } = require('sequelize'); // Import Sequelize
const sequelize = new Sequelize(process.env.DB, process.env.DBUser, process.env.DBPassword, {
    dialect: 'mysql', // Specify the database dialect as MySQL
    host: process.env.DBHost, // Retrieve the database host from environment variables
    port: process.env.DBPort // Retrieve the database port from environment variables
});

module.exports = sequelize; // Export the Sequelize instance for use in other modules