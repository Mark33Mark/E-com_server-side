
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const router = require( "express" ).Router();
const { Tag, Product, ProductTag } = require( "../../models" );

// ============================================================================


/*------------------------------------------- 
|	C-reate a new tag     					|
--------------------------------------------*/
router.post( "/", async ( req, res ) => {

	try {
		const newTag = await Tag.create(req.body);
		res.status(200).json(newTag);
	
	} catch (err) {
		res.status(400).json(err);
	}
});


/*------------------------------------------- 
|	R-ead all tags     						|
--------------------------------------------*/
router.get( "/", async ( req, res ) => {
	try {
		const tagData = await Tag.findAll({
			include: [{ model: Product }]
		});
	
		res.status(200).json(tagData);
	
	} catch (err) {
		res.status(500).json(err);
	}

});


/*------------------------------------------- 
|	R-ead a single tag by its 'id'     		|
--------------------------------------------*/
router.get( "/:id", async ( req, res ) => {
	try {
		const tagData = await Tag.findByPk(req.params.id, { include: [{ model: Product }], });
	
		if (!tagData) {
			res.status(404).json({ message: "Tag not found" });
			return;
		}
	
		res.status(200).json(tagData);
	
	} catch (err) {
		res.status(500).json(err);
	}

});


/*------------------------------------------- 
|	U-pdate a tag's name by its `id` value  |
--------------------------------------------*/
router.put( "/:id", async ( req, res ) => {
	try {
		const updateTag = await Tag.update(
			{
				tag_name: req.body.tag_name,
			},
			{
				where: {
					id: req.params.id,
				}
			},
		);
	
		if (!updateTag[0]) {
			res.status(404).json("Tag not found");
			return;
		}
	
		res.status(200).json("Tag Updated");
	
	} catch (err) {
		res.status(500).json(err);
	}

});


/*------------------------------------------- 
|	D-elete a tag by its id     			|
--------------------------------------------*/
router.delete( "/:id", async ( req, res ) => {
	try {
		const deleteTag = await Tag.destroy({
			where: {
				id: req.params.id,
			},
		});
	
		if (!deleteTag) {
			res.status(404).json( "Tag not found" );
			return;
		}
	
		res.status(200).json( "Tag Deleted" );
	
	} catch (err) {
		res.status(500).json(err);
	}

});


// ============================================================================

module.exports = router;

/* ============================================================================
	============================================================================*/ 