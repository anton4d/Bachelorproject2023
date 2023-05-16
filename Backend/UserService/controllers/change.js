const bcrypt = require('bcryptjs');
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');
var validator = require('validator');
const { User, Settings } = require('../models');

// Function to check if the user is authenticated based on the authorization token
const authtindication = async (request) => {
    const authHeader = request.get("Authorization");
    if (!authHeader) {
        return false;
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secret');
    } catch (err) {
        return false;
    }
    return decodedToken;
}

// Function to get the settings associated with a specific user ID
const getSettings = async (id) => {
    const settings = await Settings.findOne({
        where: {
            Userid: {
                [Op.eq]: id
            }
        }
    });
    console.log(settings.toJSON());
    return settings;
}

// Function to get a user object based on the provided user ID
const getUser = async (id) => {
    const user = await User.findOne({
        where: {
            id: {
                [Op.eq]: id
            }
        }
    });
    return user;
}
const oneTimelokation = async (req, res) => {
    // Check if user is authenticated
    const token = await authtindication(req)
    if (token === false) {
        return res.status(401).json({message: "not authentication"})
    }
    try {
        // Get settings for the user
        const settingsFromUser = await getSettings(token.id)

        // Retrieve the old oneTimeLokation value
        const oldlok = await settingsFromUser.oneTimeLokation

        // Check if the new value is the same as the old one
        if (oldlok === req.body.oneTimeLokation){
            return res.status(400).json({message: "can't updates to the same value"})
        }

        // Update the oneTimeLokation value and save the settings
        await settingsFromUser.set("oneTimeLokation", req.body.oneTimeLokation)
        await settingsFromUser.save();

        return res.status(200).json({message: "updated settings from " + oldlok + " to " + req.body.oneTimeLokation})
    } catch (err) {
        return res.status(500).json({message: err.message || 'update of gpsSettings failed'});
    }
}

const allowgps = async (req, res) => {
    // Check if user is authenticated
    const token = await authtindication(req)
    if (token === false) {
        return res.status(401).json({message: "not authentication"})
    }
    try {
        // Get settings for the user
        const settingsFromUser = await getSettings(token.id)

        // Retrieve the old allowgps value
        const oldGps = await settingsFromUser.allowgps

        // Check if the new value is the same as the old one
        if (oldGps === req.body.allowgps){
            return res.status(400).json({message: "can't updates to the same value"})
        }

        // Update the allowgps value and save the settings
        await settingsFromUser.set("allowgps", req.body.allowgps);
        await settingsFromUser.save();

        return res.status(200).json({message: "updated settings from "+ oldGps+ " to "+ req.body.allowgps})
    } catch (err) {
        return res.status(500).json({message: err.message || 'update of gpsSettings failed'});
    }
}

const searchR = async (req, res) => {
    // Check if user is authenticated
    const token = await authtindication(req)
    if (token === false) {
        return res.status(401).json({message: "not authentication"})
    }
    try {
        // Get settings for the user
        const settingsFromUser = await getSettings(token.id)

        // Retrieve the old searchR value
        const oldR = await settingsFromUser.searchR

        // Check if the new value is the same as the old one
        if (oldR === req.body.searchR){
            return res.status(400).json({message: "can't updates to the same value"})
        }

        // Update the searchR value and save the settings
        await settingsFromUser.set("searchR", req.body.searchR);
        await settingsFromUser.save();

        return res.status(200).json({message: "updated settings from " + oldR + " to "+ req.body.searchR})
    } catch (err) {
        return res.status(500).json({message: err.message || 'update of gpsSettings failed'});
    }
}


const email = async (req, res) => {
    // Check if user is authenticated
    const token = await authtindication(req)
    if (token === false) {
        return res.status(401).json({message: "not authentication"})
    }
    try {
        // Get the user associated with the token
        const user = await getUser(token.id)

        // Check if the new email is the same as the current one
        if (user.email === req.body.email){
            return res.status(400).json({message: "can't updates to the same value"})
        }

        // Validate the email format
        if (!validator.isEmail(req.body.email)){
            return res.status(400).json({message: "email is not correct email"})
        }

        // Update the email and save the user
        await user.set("email",req.body.email)
        await user.save();

        return res.status(200).json({message: " updated email"})
    } catch (err) {
        return res.status(500).json({message: err.message || 'update of gpsSettings failed'});
    }
}

const password = async (req, res) => {
    // Check if user is authenticated
    const token = await authtindication(req)
    if (token === false) {
        return res.status(401).json({message: "not authentication"})
    }
    try {
        // Get the user associated with the token
        const user = await getUser(token.id)

        // Hash the new password
        const passwordHash = await bcrypt.hash(req.body.password, 12);

        // Update the password and save the user
        await user.set("password", passwordHash);
        await user.save();

        return res.status(200).json({message: " updated password"})
    } catch (err) {
        return res.status(500).json({message: err.message || 'update of gpsSettings failed'});
    }
}

module.exports = {oneTimelokation, allowgps, searchR, email, password}
