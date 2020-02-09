'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aim = sequelize.define('Aim', {
    chat_id: DataTypes.STRING,
    title: DataTypes.STRING,
    order: DataTypes.INTEGER,
    enabled: DataTypes.BOOLEAN
  }, {});
  Aim.associate = function(models) {
    // associations can be defined here
  };
  return Aim;
};