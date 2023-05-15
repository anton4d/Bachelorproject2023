const { Op } = require("sequelize"); // Import Sequelize's operator
const redisClient = require('../utils/redis'); // Import the Redis client
const Offer = require("../models/offer"); // Import the Offer model

// Handler function to retrieve all offers
const offers = async (req, res, next) => {
    try {
        const offers = await Offer.findAll(); // Retrieve all offers from the database
        return res.status(200).json({ message: "Here are all the shops", offers });
    } catch (err) {
        return res.status(500).json({ message: err.message || 'Could not find all offers' });
    }
};

// Handler function to retrieve offers from a specific shop
const shopOffers = async (req, res, next) => {
    const { shopid } = req.body; // Extract the shopid from the request body

    try {
        const redisKey = shopid.toString(); // Convert shopid to string if it's not already

        // Check if the offers exist in Redis
        const offersJSON = await redisClient.get(redisKey);

        if (offersJSON) {
            // Offers exist in Redis, parse the JSON string back to an array of JSON objects
            const offers = JSON.parse(offersJSON);
            return res.status(200).json({ message: "Here are all the offers from a shop", offers });
        }

        // Offers not found in Redis, proceed to retrieve offers from the database
        try {
            const offers = await Offer.findAll({
                where: {
                    shopid: {
                        [Op.eq]: shopid
                    }
                }
            });
            return res.status(200).json({ message: "Here are all the offers from a shop", offers });
        } catch (err) {
            return res.status(500).json({ message: err.message || 'Could not find all offers' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message || 'Could not find all offers' });
    }
};

module.exports = { shopOffers, offers }; // Export the handler functions for use in other modules
