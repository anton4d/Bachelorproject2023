const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

class offer extends Model {}

offer.init({
    shopid: {
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
      type: DataTypes.INTEGER,

    },
    endTime: {
      type: DataTypes.STRING,
    },
    newPrice: {
      type: DataTypes.INTEGER,
    },
    orginalPrice: {
        type: DataTypes.INTEGER,
    },
    percentDiscount: {
      type: DataTypes.FLOAT,
    },
    stock: {
        type: DataTypes.INTEGER,
    }

}, {
    sequelize,
    modelName: 'offer',
});

module.exports = offer;

