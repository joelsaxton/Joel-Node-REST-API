module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'user', // table name
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(100),
				allowNull: false,
				unique: true
			},
			password: { // @todo figure out Sequelize hashing
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			state: {
				type: DataTypes.STRING(2),
				allowNull: false,
			},
			zip: {
				type: DataTypes.STRING(10),
				allowNull: false,
			},
		},
		{
			// @todo pw hashing here
		}
	);

	return User;
};
