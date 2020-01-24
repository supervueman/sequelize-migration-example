module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('User', 'petName', {
          type: Sequelize.STRING
        }, {
          transaction: t
        }),
        queryInterface.addColumn('User', 'favoriteColor', {
          type: Sequelize.STRING,
        }, {
          transaction: t
        })
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('User', 'petName', {
          transaction: t
        }),
        queryInterface.removeColumn('User', 'favoriteColor', {
          transaction: t
        })
      ]);
    });
  }
};
