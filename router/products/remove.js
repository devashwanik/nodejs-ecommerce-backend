const Product = require('../../models/product');

const remove = async (req, res) => {
    try {
        const deleted = await Product.remove({_id: req.params.productId});
        res.json({"message": "product has been deleted."});
    }
    catch (err) {
        res.json({"message": "Error deleting the product"})
    }
};

module.exports = remove;