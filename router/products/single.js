const Product = require('../../models/product');

const single = async (req, res) => {
    try {
        const product = await Product.findOne({_id:req.params.productId});
        res.json({"product": product});
    }
    catch(err) {
        res.json({"message": `Erorr while fetching product. ${err}`  })
    }
};

module.exports = single;