
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// imports required parts of Sequelize library
const { Model, DataTypes } 	= require( "sequelize" );

// imports database connection from config.js
const sequelize 			= require( "../config/connection" );

// Initialises Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

Product.init(
	{
		id: {
			type: 	DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		product_name: {
			type: 	DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: 	DataTypes.DECIMAL(8,2),
			allowNull: false,
			validate: {
				isDecimal: true,
			},
		},
		stock: {
			type: 	DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
			validate: {
				isNumeric: true,
			},
		},
		category_id: {
			type: 	DataTypes.INTEGER,
			references: {
				model: "category",
				key: "id",
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "product",
	}
);

module.exports = Product;
