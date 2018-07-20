var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    google: {
    id: String,
    email: String,
    name: String
    }
})

module.exports = mongoose.model('user', userSchema);

