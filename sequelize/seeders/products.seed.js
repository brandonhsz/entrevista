'use strict';

const { Product } = require('../../dist/src/models');

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([

      Product.findOrCreate({
        where: {
          code: 'PANTS',
        },
        defaults: {
          code: 'PANTS',
          name: 'Pants',
          price: 5.00,
        }
      }),

      Product.findOrCreate({
        where: {
          code: 'TSHIRT',
        },
        defaults: {
          code: 'TSHIRT',
          name: 'T-Shirt',
          price: 20.00,
        },
      }),

      Product.findOrCreate({
        where: {
          code: 'HAT',
        },
        defaults: {
          code: 'HAT',
          name: 'Hat',
          price: 7.50,
        }
      }),
    ])
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