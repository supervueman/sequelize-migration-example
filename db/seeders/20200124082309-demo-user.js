module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      firstname: 'John',
      lastname: 'Doe',
      email: 'demo@demo.com',
      phone: '',
      avatar: '',
      password: ''
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
