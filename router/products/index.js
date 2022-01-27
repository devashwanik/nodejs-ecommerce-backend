const products = require("express").Router();
const all = require('./all');
const add = require('./add');
const single = require('./single');
const update = require('./update');
const remove = require('./remove');

// LISTING ALL PRODUCTS
products.get('/', all);

// INSERTING A PRODUCT
products.post('/', add);

// GET SINGLE PRODUCT
products.get('/:productId', single);

//UPDATE A PRODUCT
products.patch('/:productId', update);

//DELETE A PRODUCT
products.delete('/:productId', remove);

module.exports = products;