const express = require('express');
const router = express.Router();

//controller
const {shops, getShopBysLocation, getShopById} = require("../controllers/shopController")


//get all stores
router.get("/shops", shops)

//get stores based on location
router.post("/shopByLocation", getShopBysLocation)

//get shop based on id
router.post("/shopById", getShopById)


router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found shopserviceAPI"});
});

module.exports = router;