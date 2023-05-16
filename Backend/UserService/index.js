const express = require('express');
require('dotenv').config();

const sequelize = require('./utils/database.js');

const router = require('./routes/routes.js');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing) to allow requests from any origin
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Sync the database models with the database
sequelize.sync();

// Use the router for handling routes
app.use(router);

// Set the port to listen on
const PORT = process.env.PORT || 6666;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});