const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    name_product: String,
    description_product: String,
    qtd_product: { type: Number, default: 0 },
    price_product: String,
}, {
    timestamps: true
})

const products = mongoose.model('Products', DataSchema);
module.exports = products;