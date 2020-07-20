const Product = require('../models/Product.model');


module.exports = {
    async index(req, res) {
        const product = await Product.find();
        res.json(product);
    },
    async create(req, res) {
        const { name_user, email_user, type_user, password_user } = req.body;
        let data = {};
        let product = await Product.findOne({ email_user });

        if (!product) {
            data = { name_user, email_user, type_user, password_user };
            product = await Product.create(data);
            return res.status(200).json(product);
        } else {
            return res.status(500).json(product);
        }
    },
    async details(req, res) {
        const { _id } = req.params;
        const product = await Product.findOne({ _id });
        res.json(product);
    },
    async delete(req, res) {
        const { _id } = req.params;
        const product = await Product.findByIdAndDelete({ _id });
        return res.json(product);
    },
    async update(req, res) {
        const { _id, name_user, email_user, type_user, password_user } = req.body;
        const data = { name_user, email_user, type_user, password_user };
        const product = await Product.findOneAndUpdate({ _id }, data, { new: true });
        return res.json(product);
    },
}
