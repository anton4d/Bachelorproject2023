// Import required modules
const express = require('express'); // Express framework for creating web applications
require('dotenv').config(); // Load environment variables from .env file
const offer = require('./models/offer'); // Import the offer model
const seedData = require("./seed"); // Import seed data
const sequelize = require('./utils/database.js'); // Import Sequelize for database management

const router = require('./routes/routes.js'); // Import the router module

const app = express(); // Create an instance of Express

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

// Set headers to allow cross-origin resource sharing
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Check if the SEED environment variable is set to "true"
if (process.env.SEED === "true") {
    (async () => {
        await sequelize.sync({ force: true }); // Drop and recreate tables
        await offer.bulkCreate(seedData); // Insert seed data into the database
        console.log('Seed data inserted successfully!');
    })();
} else {
    sequelize.sync(); // Sync the models with the database
}

app.use(router); // Use the router module for routing

const PORT = process.env.PORT || 6668; // Set the port number from environment variables or use a default value
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`); // Start the server and log the port number
});
