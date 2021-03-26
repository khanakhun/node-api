'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teacher.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      university: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      major: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      degree: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      experience: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Date.now(),
      },
      endDate: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Date.now(),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Date.now(),
      },
    },
    {
      sequelize,
      modelName: 'Teacher',
      timestamps: false,
      tableName: 'teachers',
    }
  );
  return Teacher;
};
