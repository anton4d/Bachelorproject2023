const { Op } = require("sequelize");

const geolib = require('geolib');

const Store = require("../models/store")

//get all stores
const stores = async (req, res, next) => {
    try{
        const stores = await Store.findAll();
        return res.status(200).json({message: "Here are all the stores", "stores": stores})
    }
    catch (err) {
        return res.status(500).json({message: err.message || 'Could not find all stores'});
    }
}

//get stores based on location
const getStoresByLocation = async (req, res, next) => {
    const { latitude, longitude, radius } = req.body;
    const radiusInMeter = radius * 1000
    //console.log(`latitude: ${latitude}, longitude: ${longitude}, radiusInMeter: ${radiusInMeter}`);
    try {
        const stores = await Store.findAll();
        const filteredStores = stores.filter((store) =>
            geolib.isPointWithinRadius(
                { latitude: latitude, longitude: longitude },
                { latitude: store.latitude, longitude: store.longitude },
                radiusInMeter
            )
        );
        return res.status(200).json({ message: 'Here are all the stores:', stores: filteredStores });
    } catch (err) {
        return res.status(500).json({ message: err.message || 'Could not find all stores' });
    }
};

//get store based on id
const getStoreById = async (req,res,next) =>{
    const {id} = req.body;
    try {
        const store = await Store.findByPk(id)
        return res.status(200).json({message: "Here is the store", "store":store})
    }
    catch (err) {
        return res.status(500).json({message: err.message || 'Could not find the store'});
    }
}

module.exports = { stores, getStoresByLocation, getStoreById }
