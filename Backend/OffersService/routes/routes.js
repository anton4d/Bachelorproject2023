const express = require('express'); // Import Express framework
const router = express.Router(); // Create a new router instance

// Import controller functions from offerController
const { shopOffers, offers } = require("../controllers/offerController");

// Define routes

// Get all offers
router.get("/offers", offers);

// Get offers based on store id
router.post("/shopOffers", shopOffers);

// Handle undefined routes
router.use('/', (req, res, next) => {
    res.status(404).json({ error: "Page not found shopserviceAPI" });
});

module.exports = router; // Export the router for use in other modules
