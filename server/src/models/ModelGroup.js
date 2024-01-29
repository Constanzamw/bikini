const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ModelGroup = sequelize.define("ModelGroup", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });


  return ModelGroup;
};