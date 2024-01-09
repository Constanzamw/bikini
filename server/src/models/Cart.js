const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Cart', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // Otros campos relacionados con el carrito de compras
  },  { timestamps: false });
};