const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

class Settings extends Model {}

// Define the `Settings` model with its attributes and options.
Settings.init(
    {
        // `allowgps` attribute represents a boolean value, defaulting to `true`.
        allowgps: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        // `searchR` attribute represents an integer value, defaulting to `10`.
        searchR: {
            type: DataTypes.INTEGER,
            defaultValue: 10,
        },
        // `oneTimeLokation` attribute represents a string value.
        oneTimeLokation: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize, // Specify the Sequelize instance.
        modelName: 'settings', // Set the model name to 'settings'.
    }
);

module.exports = Settings; // Export the `Settings` model.