module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			isEmail: true
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
			notEmpty: false
		},
		firstname: DataTypes.STRING,
		lastname: DataTypes.STRING,
		avatar: DataTypes.STRING,
		password: {
			type: DataTypes.STRING,
			notEmpty: true
		}
	});
	return User;
};
