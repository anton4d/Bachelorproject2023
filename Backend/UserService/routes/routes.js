const express = require('express');

const { signup, login, isAuth } = require('../controllers/auth.js');
const { oneTimelokation, allowgps, searchR, email, password } = require("../controllers/change");

const router = express.Router();

// User create and login routes
router.post('/login', login); // Route for user login
router.post('/signup', signup); // Route for user signup
router.get('/settings', isAuth); // Route to get user settings (requires authentication)

// Routes for changing user settings
router.post("/oneTimelokation", oneTimelokation); // Route to update one-time location setting
router.post("/allowgps", allowgps); // Route to update GPS permission setting
router.post("/searchR", searchR); // Route to update search radius setting
router.post("/email", email); // Route to update user email
router.post("/password", password); // Route to update user password

// Route for unmatched paths
router.use('/', (req, res, next) => {
    res.status(404).json({ error: "page not found userAPI" });
});

module.exports = router; // Export the router