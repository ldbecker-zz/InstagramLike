'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'Images',
        'hashtags',
         Sequelize.STRING
      );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Images');
  }
};
