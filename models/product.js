const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    sku: {
        type: String,
        required: true,
        unique:true,
        validate: /^\d+$/
    },
    name: {
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type:String
    },
    price: {
        type:Number,
        required:true
    },
    created: {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);