const express = require('express');
const router = express.Router();

// controller
const { stores, getStoresByLocation, getStoreById } = require("../controllers/storeController");

// get all stores
router.get("/stores", stores);

// get stores based on location
router.post("/storesByLocation", getStoresByLocation);

// get store based on id
router.post("/storeById", getStoreById);

router.use('/', (req, res, next) => {
    res.status(404).json({ error: "Page not found: shopserviceAPI" });
});

module.exports = router;
