const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

class User extends Model {}

// Define the `User` model with its attributes and options.
User.init(
    {
        // `email` attribute represents a string value, and it is required and unique.
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        // `password` attribute represents a string value, and it is required.
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize, // Specify the Sequelize instance.
        modelName: 'user', // Set the model name to 'user'.
    }
);

module.exports = User; // Export the `User` model.
