'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Teachers', {
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
        allowNull: false,
      },
      endDate: {
        allowNull: false,
        type: DataTypes.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Date.now(),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Teachers');
  },
};
