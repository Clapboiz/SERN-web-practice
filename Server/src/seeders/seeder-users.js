'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // email: DataTypes.STRING,
  // password: DataTypes.STRING,
  // firstName: DataTypes.STRING,
  // lastName: DataTypes.STRING,
  // address: DataTypes.STRING,
  // phoneNumber: DataTypes.STRING,
  // gender: DataTypes.BOOLEAN,
  // image: DataTypes.STRING,
  // roleId: DataTypes.STRING,
  // positionId: DataTypes.STRING,

  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Lap',
      lastName: 'Pham',
      address: "HCM",
      phoneNumber:"0123456789",
      gender:1,
      image: "http://xyz",
      roleId: "R1",
      positionId:"xyz",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
