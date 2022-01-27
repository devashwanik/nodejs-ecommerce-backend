const Product = require('../../models/product');
const add = async (req, res) => {

    const product = new Product({
        "sku": req.body.sku,
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price
    });

    try {
    
        const savedProduct = await product.save();
        res.json({"message": "Product is inserted.", "product": savedProduct});
    }
    catch(err) {
        res.send({ "message": "error inserting product. " + err})
    }
};

module.exports = add;