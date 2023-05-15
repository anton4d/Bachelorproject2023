const { Op } = require("sequelize");

const geolib = require('geolib');

const Shop = require("../models/shop")

//get all stores
const shops = async (req, res, next) => {
    try{
        const shops = await Shop.findAll();
        return res.status(200).json({message: "here are all the shops", "shops": shops})
    }
    catch (err) {
        return res.status(500).json({message: err.message || 'could not find all shops'});
    }
}



//get stores based on location
const getShopBysLocation = async (req, res, next) => {
    const { latitude, longitude, radius } = req.body;
    const radiusInMeter = radius * 1000
    console.log(`latitude: ${latitude}, longitude: ${longitude}, radiusInMeter: ${radiusInMeter}`);
    try {
        const shops = await Shop.findAll();
        const filteredShops = shops.filter((shop) =>
            geolib.isPointWithinRadius(
                { latitude: latitude, longitude: longitude },
                { latitude: shop.latitude, longitude: shop.longitude },
                radiusInMeter
            )
        );
        return res.status(200).json({ message: 'Here are all the shops:', shops: filteredShops });
    } catch (err) {
        return res.status(500).json({ message: err.message || 'Could not find all shops' });
    }
};

//get shop based on id
const getShopById = async (req,res,next) =>{
    const {id} = req.body;
    try {
        const shop = await Shop.findByPk(id)
        return res.status(200).json({message: "here sis the shop", "shop":shop})
    }
    catch (err) {
        return res.status(500).json({message: err.message || 'could not find the shops'});
    }
}

module.exports = {shops, getShopBysLocation, getShopById}