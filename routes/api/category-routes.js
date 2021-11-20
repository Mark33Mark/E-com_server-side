/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const router = require( "express" ).Router();
const { Category, Product } = require( "../../models" );

// ============================================================================

/*------------------------------------------- 
|	C-reate a new category     				|
--------------------------------------------*/
router.post( "/", async ( req, res ) => {

	/* 
	req.body should look like this...
    {
		"category_name": "socks"
    }
	*/
	try {
		const newCategory = await Category.create(req.body);
		res.status(200).json(newCategory);
	
	} catch (err) {
		res.status(400).json(err);
	}
});


/*------------------------------------------- 
|	R-ead all categories     				|
--------------------------------------------*/
router.get( "/", async ( req, res ) => {
	try {
		const categoryData = await Category.findAll({
			include: [{ model: Product }]
		});
	
		res.status(200).json(categoryData);
	
	} catch (err) {
		res.status(500).json(err);
	}
});


/*------------------------------------------- 
|	R-ead one category by its `id` value    |
--------------------------------------------*/
router.get( "/:id", async ( req, res ) => {
	try {
		const categoryData = await Category.findByPk(req.params.id, { include: [{ model: Product }], });
	
		if (!categoryData) {
			res.status(404).json({ message: `Category with the ID ${req.params.id} does not exist.` });
			return;
		}
	
		res.status(200).json(categoryData);
	
	} catch (err) {
		res.status(500).json(err);
	}
});


/*------------------------------------------- 
|	U-pdate a category by its `id` value    |
--------------------------------------------*/
router.put( "/:id", async ( req, res ) => {
	try {
		const updateCategory = await Category.update(
			{
				category_name: req.body.category_name,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);
	
		if (!updateCategory[0]) {
			res.status(404).json({ message: "Category not found" });
			return;
		}
	
		res.status(200).json( "Category Updated" );
	
	} catch (err) {
		res.status(500).json(err);
	}
});


/*------------------------------------------- 
|	D-elete a category by its id    		|
--------------------------------------------*/
router.delete( "/:id", async ( req, res ) => {
	try {
		const deleteCategory = await Category.destroy({
			where: {
				id: req.params.id,
			},
		});
	
		if (!deleteCategory) {
			res.status(404).json( { message: `Category with the ID ${req.params.id} does not exist.` } );
			return;
		}
	
		res.status(200).json( { message: `Tag ID ${req.params.id} has been deleted.` } );
	
	} catch (err) {
		res.status(500).json(err);
	}
});

// ============================================================================

module.exports = router;

/* ============================================================================
	============================================================================*/ 