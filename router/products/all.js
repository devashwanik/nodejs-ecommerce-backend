const Product = require("../../models/product");

const all = async (req, res) => {
    const products = await Product.find();
    res.json({ "products": products});
};

module.exports = all;