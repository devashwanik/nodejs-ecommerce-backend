const Product = require('../../models/product');

const update = async (req, res) => {
    try {
        
        const updatedProduct = await Product.updateOne({ _id: req.params.productId }, {
            "sku": req.body.sku,
            "name": req.body.name,
            "description": req.body.description,
            "price": req.body.price
        });

        res.json({ "message": "Product has been updated", "product": updatedProduct});
    }
    catch (err) {
        res.json({"message": `Error while updating the product. ${err}` })
    }
};

module.exports = update;