
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const router    = require( "express" ).Router();
const apiRoutes = require( "./api" );

router.use( "/api", apiRoutes );

router.use(( req, res ) => {
	res.send( "<h1>Wrong route ✋</h1>" );
});

module.exports = router;