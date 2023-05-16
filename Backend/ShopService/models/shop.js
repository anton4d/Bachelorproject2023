const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

class shop extends Model {}

shop.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

}, {
    sequelize,
    modelName: 'shop',
});

module.exports = shop;