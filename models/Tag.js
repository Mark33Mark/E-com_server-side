
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { Model, DataTypes } 	= require( "sequelize" );
const sequelize 			= require( "../config/connection.js" );

class Tag extends Model {}

Tag.init(
	{
		// define columns
	},
	{
		sequelize,
		timestamps:      false,
		freezeTableName: true,
		underscored:     true,
		modelName:       "tag",
	}
);

module.exports = Tag;
