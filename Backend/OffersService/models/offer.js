const { Model, DataTypes } = require('sequelize'); // Import Sequelize's Model and DataTypes
const sequelize = require('../utils/database'); // Import the Sequelize instance

class offer extends Model {} // Define the "offer" model as a subclass of Sequelize's Model class

offer.init({
    storeid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ean: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discount: {
        type: DataTypes.INTEGER
    },
    endTime: {
        type: DataTypes.STRING
    },
    newPrice: {
        type: DataTypes.INTEGER
    },
    orginalPrice: {
        type: DataTypes.INTEGER
    },
    percentDiscount: {
        type: DataTypes.FLOAT
    },
    stock: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'offer' // Set the model name as 'offer'
});

module.exports = offer; // Export the offer model for use in other modules


