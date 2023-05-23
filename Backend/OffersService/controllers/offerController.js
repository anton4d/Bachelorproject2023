const { Op } = require("sequelize"); // Import Sequelize's operator
const redisClient = require('../utils/redis'); // Import the Redis client
const Offer = require("../models/offer"); // Import the Offer model

// Handler function to retrieve all offers
const offers = async (req, res, next) => {
    try {
        const offers = await Offer.findAll(); // Retrieve all offers from the database
        return res.status(200).json({ message: "Here are all the offers", offers });
    } catch (err) {
        return res.status(500).json({ message: err.message || 'Could not find all offers' });
    }
};

// Handler function to retrieve offers from a specific store
const storeOffers = async (req, res, next) => {
    const { storeId } = req.body; // Extract the storeId from the request body

    try {
        const redisKey = storeId.toString(); // Convert storeId to string if it's not already

        // Check if the offers exist in Redis
        const offersJSON = await redisClient.get(redisKey);

        if (offersJSON) {
            // Offers exist in Redis, parse the JSON string back to an array of JSON objects
            const offers = JSON.parse(offersJSON);
            return res.status(200).json({ message: "Here are all the offers from a store", offers });
        }

        // Offers not found in Redis, proceed to retrieve offers from the database
        try {
            const offers = await Offer.findAll({
                where: {
                    storeId: {
                        [Op.eq]: storeId
                    }
                }
            });
            return res.status(200).json({ message: "Here are all the offers from a store", offers });
        } catch (err) {
            return res.status(500).json({ message: err.message || 'Could not find all offers' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message || 'Could not find all offers' });
    }
};

module.exports = { storeOffers, offers }; // Export the handler functions for use in other modules

