
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

require( "dotenv" ).config();

const Sequelize = require( "sequelize" );

// JawsDB is an add-on for providing a fully functional 
// MySQL Database server for use with your Heroku application.
// I prefer ClearDB MySQL as I've used it.

const sequelize = process.env.JAWSDB_URL
	? new Sequelize( process.env.JAWSDB_URL )
	: new Sequelize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
		host: "localhost",
		dialect: "mysql",
		dialectOptions: {
			decimalNumbers: true,
		},
	});

module.exports = sequelize;



