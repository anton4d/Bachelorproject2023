const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const { Op } = require("sequelize"); // Import Sequelize's Op operator
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for token generation
var validator = require('validator'); // Import validator for input validation
const { User, Settings } = require('../models'); // Import User and Settings models

const signup = async (req, res, next) => {
    // Check if required fields are missing
    if (!req.body.email || !req.body.password || !req.body.confirmPassword) {
        return res.status(400).json({ message: "bruger infomation mangler" });
    }
    // Check if password and confirmPassword match
    if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).json({ message: "password do not match" });
    }
    // Check if email is a valid email format
    if (!validator.isEmail(req.body.email)){
        return res.status(400).json({ message: "email is not correct email" });
    }
    try {
        // Check if user with the same email already exists
        const dbUser = await User.findOne({
            where: {
                email: {
                    [Op.eq]: req.body.email
                }
            }
        });
        if (dbUser) {
            return res.status(409).json({ message: "email already exists" });
        } else {
            // Create a new user with hashed password
            const passwordHash = await bcrypt.hash(req.body.password, 12);
            const user = await User.create({
                email: req.body.email,
                password: passwordHash,
            });
            // Create settings for the user
            const userSetting = await user.createSetting();
            // Generate token for authentication
            const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
            return res.status(200).json({ message: "user created with Email " + user.email, "token": token, "settings": userSetting });
        }
    } catch (err) {
        console.log(err);
        res.status(502).json({ message: "error while creating the user" });
    }
};
const login = async (req, res, next) => {
    // Check if email and password are provided
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "email/password mangler" });
    }
    try {
        // Find the user with the provided email
        const dbUser = await User.findOne({
            where: {
                email: {
                    [Op.eq]: req.body.email
                }
            }
        });

        if (!dbUser) {
            return res.status(404).json({ message: "No user with that email/password" });
        } else {
            // Find the user's settings
            const settingsFromUser = await Settings.findOne({
                where: {
                    Userid: {
                        [Op.eq]: dbUser.id
                    }
                }
            });
            // Compare the provided password with the stored hashed password
            bcrypt.compare(req.body.password, dbUser.password, (err, compareRes) => {
                if (err) { // Error while comparing
                    res.status(502).json({ message: "error while checking user password" });
                } else if (compareRes) { // Passwords match
                    // Generate token for authentication
                    const token = jwt.sign({ id: dbUser.id }, 'secret', { expiresIn: '1h' });
                    res.status(200).json({ message: "user logged in", "token": token, "settings": settingsFromUser });
                } else { // Password doesn't match
                    res.status(401).json({ message: "invalid credentials" });
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(502).json({ message: "error while finding user" });
    }
};

const isAuth = async (req, res, next) => {
    // Get the Authorization header
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.status(401).json({ message: 'not authenticated' });
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secret');
    } catch (err) {
        return res.status(500).json({ message: err.message || 'could not decode the token' });
    }
    if (!decodedToken) {
        res.status(401).json({ message: 'unauthorized' });
    } else {
        try {
            // Find the user's settings
            const settingsFromUser = await Settings.findOne({
                where: {
                    Userid: {
                        [Op.eq]: decodedToken.id
                    }
                }
            });
            console.log(settingsFromUser.toJSON());
            if (!settingsFromUser) {
                return res.status(404).json({ message: "could not find settings" });
            } else {
                res.status(200).json({ message: 'here is your resource', "settings": settingsFromUser });
            }
        } catch (err) {
            return res.status(500).json({ message: err.message || 'could not find settings' });
        }
    }
};

module.exports = {signup, login, isAuth};