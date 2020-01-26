module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.sequelize.transaction(transaction =>
      Promise.all([
        queryInterface.addColumn(
          "User",
          "petName",
          {
            type: Sequelize.STRING
          },
          {
            transaction
          }
        ),
        queryInterface.addColumn(
          "User",
          "favoriteColor",
          {
            type: Sequelize.STRING
          },
          {
            transaction
          }
        )
      ])
    ),
  down: queryInterface =>
    queryInterface.sequelize.transaction(transaction =>
      Promise.all([
        queryInterface.removeColumn("User", "petName", {
          transaction
        }),
        queryInterface.removeColumn("User", "favoriteColor", {
          transaction
        })
      ])
    )
};
