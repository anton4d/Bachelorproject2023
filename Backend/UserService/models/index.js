
// Import the `User` model.
const User = require('./user');

// Import the `Settings` model.
const Settings = require('./settings');

// Establish a relationship where `Settings` model belongs to `User` model.
Settings.belongsTo(User);

// Establish a relationship where `User` model has one associated `Settings` model.
User.hasOne(Settings);

// Export the `User` and `Settings` models for use in other modules.
module.exports = { User, Settings };
