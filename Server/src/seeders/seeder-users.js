'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // email: DataTypes.STRING,
  // password: DataTypes.STRING,
  // firstName: DataTypes.STRING,
  // lastName: DataTypes.STRING,
  // address: DataTypes.STRING,
  // gender: DataTypes.BOOLEAN,
  // roleid: DataTypes.STRING

  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Lap',
      lastName: 'Pham',
      address: "HCM",
      gender:1,
      typeRole: "ROLE",
      keyRole: "R1",
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
