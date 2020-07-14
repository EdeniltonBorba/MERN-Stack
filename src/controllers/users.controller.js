const Users = require('../models/user.model');

module.exports = {
    index(req, res) {
        res.json({ message: 'Hello World from controller user' });
    },
    async create(req, res) {
        const { name_user, email_user, type_user, password_user } = req.body;

        let data = {};

        let user = Users.findOne({ email_user });
        if (!user) {
            data = { name_user, email_user, type_user, password_user };
            user = await Users.create(data);
            return res.status(200).json(user);
        } else {
            return res.status(500).json(user);
        }
    }
}

