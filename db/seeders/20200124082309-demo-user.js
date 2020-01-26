module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "User",
      [
        {
          firstname: "John",
          lastname: "Doe",
          email: "demo@demo.com",
          phone: "",
          avatar: "",
          password: ""
        }
      ],
      {}
    ),
  down: queryInterface => queryInterface.bulkDelete("User", null, {})
};
