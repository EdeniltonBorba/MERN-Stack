const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    name_user: String,
    email_user: String,
    type_user: { type: Number, default: 1 },
    password_user: String,
}, {
    timestamps: true
})

DataSchema.pre('save', function (next) {
    if (!this.isModified('password_user')) {
        return next();
    }
    this.password_user = bcrypt.hashSync(this.password_user, 10);
});

const users = mongoose.model('Users', DataSchema);
module.exports = users;