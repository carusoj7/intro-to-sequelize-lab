'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const date = new Date()

    await queryInterface.bulkInsert('Dogs', [{
      name: 'Oliver',
      breed: 'Labradoodle',
      age: 5,
      createdAt: date,
      updatedAt: date,
      reports: 'Oliver was good today!'
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Dogs', null, {})
  }
};
