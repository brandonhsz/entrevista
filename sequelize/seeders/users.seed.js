'use strict';

const { User } = require('../../dist/src/models');

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      User.findOrCreate({
        where: {
          email: 'admin@localhost',
        },
        defaults: {
          email: 'admin@localhost',
          password: 'admin',
        },
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};


